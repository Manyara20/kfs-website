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

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Database connected successfully");
  release();
});

// Multer setup
const storage = multer.diskStorage({
  destination: "./Uploads/",
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

// Middleware to log request details
router.use((req, res, next) => {
  console.log(`${req.method} /api/tenders${req.path} - User:`, req.user);
  next();
});

// GET /api/tenders - Retrieve all tenders (admin or supply_chain)
router.get("/", async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "supply_chain")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }
    const result = await pool.query("SELECT * FROM tenders");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching tenders:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// POST /api/tenders - Create a new tender (admin or supply_chain)
router.post("/", upload.single("pdf"), async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "supply_chain")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { description } = req.body;
    if (!description || !req.file) {
      return res.status(400).json({ error: "Description and PDF file are required" });
    }

    const pdfUrl = `/Uploads/${req.file.filename}`;
    const result = await pool.query(
      "INSERT INTO tenders (pdf_url, description, user_id) VALUES ($1, $2, $3) RETURNING *",
      [pdfUrl, description, req.user.id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating tender:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// PUT /api/tenders/:id - Update an existing tender (admin or supply_chain)
router.put("/:id", upload.single("pdf"), async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "supply_chain")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const { description } = req.body;
    const pdfUrl = req.file ? `/Uploads/${req.file.filename}` : null;

    const result = await pool.query(
      "UPDATE tenders SET pdf_url = COALESCE($1, pdf_url), description = $2, updated_at = NOW() WHERE id = $3 RETURNING *",
      [pdfUrl, description, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Tender not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating tender:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// DELETE /api/tenders/:id - Delete a tender (admin or supply_chain)
router.delete("/:id", async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "supply_chain")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const result = await pool.query("DELETE FROM tenders WHERE id = $1", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Tender not found" });
    }

    res.json({ message: "Tender deleted successfully" });
  } catch (error) {
    console.error("Error deleting tender:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// PATCH /api/tenders/:id/archive - Toggle archive status of a tender (admin or supply_chain)
router.patch("/:id/archive", async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "supply_chain")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    if (!id || isNaN(id)) {
      return res.status(400).json({ error: "Invalid tender ID" });
    }

    console.log("Toggling archive for tender ID:", id);
    const result = await pool.query(
      "UPDATE tenders SET archived = NOT archived, updated_at = NOW() WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Tender not found" });
    }

    const action = result.rows[0].archived ? "archived" : "unarchived";
    res.json({ message: `Tender ${action} successfully`, tender: result.rows[0] });
  } catch (error) {
    console.error("Error toggling archive:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    if (error.code === "42703") {
      return res.status(500).json({ error: "Database schema error: Missing column", details: error.message });
    }
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

module.exports = router;