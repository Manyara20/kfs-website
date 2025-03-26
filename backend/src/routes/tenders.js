const express = require("express");
const { Pool } = require("pg");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Multer setup with custom storage
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

// Middleware to log request details for debugging
router.use((req, res, next) => {
  console.log(`${req.method} /api/tenders${req.path} - User:`, req.user);
  next();
});

// GET /api/tenders - Retrieve all active tenders
router.get("/", async (req, res) => {
  try {
    if (req.user.role !== "admin" && req.user.role !== "supply_chain") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }
    const result = await pool.query("SELECT * FROM tenders WHERE archived = FALSE");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching tenders:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/tenders - Create a new tender
router.post("/", upload.single("pdf"), async (req, res) => {
  try {
    if (req.user.role !== "admin" && req.user.role !== "supply_chain") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { description } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: "PDF file is required" });
    }

    const pdfUrl = `/uploads/${req.file.filename}`;
    const result = await pool.query(
      "INSERT INTO tenders (pdf_url, description, user_id) VALUES ($1, $2, $3) RETURNING *",
      [pdfUrl, description, req.user.id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating tender:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT /api/tenders/:id - Update an existing tender
router.put("/:id", upload.single("pdf"), async (req, res) => {
  try {
    if (req.user.role !== "admin" && req.user.role !== "supply_chain") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const { description } = req.body;
    const pdfUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const result = await pool.query(
      "UPDATE tenders SET pdf_url = COALESCE($1, pdf_url), description = $2, updated_at = NOW() WHERE id = $3 AND archived = FALSE RETURNING *",
      [pdfUrl, description, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Tender not found or already archived" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating tender:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE /api/tenders/:id - Delete a tender
router.delete("/:id", async (req, res) => {
  try {
    if (req.user.role !== "admin" && req.user.role !== "supply_chain") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const result = await pool.query("DELETE FROM tenders WHERE id = $1 AND archived = FALSE", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Tender not found or already archived" });
    }

    res.json({ message: "Tender deleted successfully" });
  } catch (error) {
    console.error("Error deleting tender:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/tenders/:id/archive - Archive a tender
router.patch("/:id/archive", async (req, res) => {
  try {
    if (req.user.role !== "admin" && req.user.role !== "supply_chain") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const result = await pool.query(
      "UPDATE tenders SET archived = TRUE, updated_at = NOW() WHERE id = $1 AND archived = FALSE RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Tender not found or already archived" });
    }

    res.json({ message: "Tender archived successfully", tender: result.rows[0] });
  } catch (error) {
    console.error("Error archiving tender:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;