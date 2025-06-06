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

// Test database connection on startup
pool.connect((err, client, release) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Database connected successfully");
  release();
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

// GET /api/documents/:category - Retrieve all documents in a category (admin or user)
router.get("/:category", async (req, res) => {
  try {
    if (!req.user || !["admin", "user"].includes(req.user.role)) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }
    const { category } = req.params;
    if (!["public", "legal", "policy", "iso"].includes(category)) {
      return res.status(400).json({ error: "Invalid category" });
    }
    const result = await pool.query("SELECT * FROM documents WHERE category = $1", [category]);
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching documents:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// POST /api/documents/:category - Create a new document (admin only)
router.post("/:category", upload.single("pdf"), async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
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
    if (!description) {
      return res.status(400).json({ error: "Description is required" });
    }

    const pdfUrl = `/uploads/${req.file.filename}`;
    const result = await pool.query(
      "INSERT INTO documents (pdf_url, description, category, user_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [pdfUrl, description, category, req.user.id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating document:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// PUT /api/documents/:id - Update an existing document (admin only)
router.put("/:id", upload.single("pdf"), async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    if (!id || isNaN(id)) {
      return res.status(400).json({ error: "Invalid document ID" });
    }

    const { description } = req.body;
    if (!description) {
      return res.status(400).json({ error: "Description is required" });
    }

    const pdfUrl = req.file ? `/uploads/${req.file.filename}` : null;
    console.log("Updating document ID:", id, "Description:", description, "PDF URL:", pdfUrl);

    const result = await pool.query(
      "UPDATE documents SET pdf_url = COALESCE($1, pdf_url), description = $2, updated_at = NOW() WHERE id = $3 AND archived = FALSE RETURNING *",
      [pdfUrl, description, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Document not found or already archived" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating document:", {
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

// DELETE /api/documents/:id - Delete a document (admin only)
router.delete("/:id", async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    if (!id || isNaN(id)) {
      return res.status(400).json({ error: "Invalid document ID" });
    }

    const result = await pool.query("DELETE FROM documents WHERE id = $1 AND archived = FALSE", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Document not found or already archived" });
    }

    res.json({ message: "Document deleted successfully" });
  } catch (error) {
    console.error("Error deleting document:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// PATCH /api/documents/:id/archive - Toggle archive status of a document (admin only)
router.patch("/:id/archive", async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    if (!id || isNaN(id)) {
      return res.status(400).json({ error: "Invalid document ID" });
    }

    console.log("Toggling archive for document ID:", id);
    const result = await pool.query(
      "UPDATE documents SET archived = NOT archived, updated_at = NOW() WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Document not found" });
    }

    const action = result.rows[0].archived ? "archived" : "unarchived";
    res.json({ message: `Document ${action} successfully`, document: result.rows[0] });
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