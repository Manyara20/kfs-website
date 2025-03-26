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

// Middleware to log request details
router.use((req, res, next) => {
  console.log(`${req.method} /api/documents${req.path} - User:`, req.user);
  next();
});

// GET /api/documents/:category - Retrieve all active documents in a category
router.get("/:category", async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }
    const { category } = req.params;
    if (!["public", "legal", "policy", "iso"].includes(category)) {
      return res.status(400).json({ error: "Invalid category" });
    }
    const result = await pool.query("SELECT * FROM documents WHERE category = $1 AND archived = FALSE", [category]);
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching documents:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/documents/:category - Create a new document
router.post("/:category", upload.single("pdf"), async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { category } = req.params;
    if (!["public", "legal", "policy", "iso"].includes(category)) {
      return res.status(400).json({ error: "Invalid category" });
    }

    const { description } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: "PDF file is required" });
    }

    const pdfUrl = `/uploads/${req.file.filename}`;
    const result = await pool.query(
      "INSERT INTO documents (pdf_url, description, category, user_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [pdfUrl, description, category, req.user.id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating document:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT /api/documents/:id - Update an existing document
router.put("/:id", upload.single("pdf"), async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const { description } = req.body;
    const pdfUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const result = await pool.query(
      "UPDATE documents SET pdf_url = COALESCE($1, pdf_url), description = $2, updated_at = NOW() WHERE id = $3 AND archived = FALSE RETURNING *",
      [pdfUrl, description, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Document not found or already archived" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE /api/documents/:id - Delete a document
router.delete("/:id", async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const result = await pool.query("DELETE FROM documents WHERE id = $1 AND archived = FALSE", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Document not found or already archived" });
    }

    res.json({ message: "Document deleted successfully" });
  } catch (error) {
    console.error("Error deleting document:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/documents/:id/archive - Archive a document
router.patch("/:id/archive", async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const result = await pool.query(
      "UPDATE documents SET archived = TRUE, updated_at = NOW() WHERE id = $1 AND archived = FALSE RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Document not found or already archived" });
    }

    res.json({ message: "Document archived successfully", document: result.rows[0] });
  } catch (error) {
    console.error("Error archiving document:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;