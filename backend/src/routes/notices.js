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
  destination: "./Uploads/",
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

// Middleware to log request details
router.use((req, res, next) => {
  console.log(`${req.method} /api/notices${req.path} - User:`, req.user);
  next();
});

// GET /api/notices - Retrieve all notices (admin or communication_officer)
router.get("/", async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "communication_officer")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }
    const result = await pool.query("SELECT * FROM notices");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching notices:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// POST /api/notices - Create a new notice (admin or communication_officer)
router.post("/", upload.single("file"), async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "communication_officer")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: "Title and description are required" });
    }

    const fileUrl = req.file ? `/Uploads/${req.file.filename}` : null;
    const result = await pool.query(
      "INSERT INTO notices (title, description, file_url, user_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, description, fileUrl, req.user.id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating notice:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// PUT /api/notices/:id - Update an existing notice (admin or communication_officer)
router.put("/:id", upload.single("file"), async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "communication_officer")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const { title, description } = req.body;
    const fileUrl = req.file ? `/Uploads/${req.file.filename}` : null;

    const result = await pool.query(
      "UPDATE notices SET title = $1, description = $2, file_url = COALESCE($3, file_url), updated_at = NOW() WHERE id = $4 RETURNING *",
      [title, description, fileUrl, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Notice not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating notice:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// DELETE /api/notices/:id - Delete a notice (admin or communication_officer)
router.delete("/:id", async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "communication_officer")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const result = await pool.query("DELETE FROM notices WHERE id = $1", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Notice not found" });
    }

    res.json({ message: "Notice deleted successfully" });
  } catch (error) {
    console.error("Error deleting notice:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// PATCH /api/notices/:id/archive - Toggle archive status of a notice (admin or communication_officer)
router.patch("/:id/archive", async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "communication_officer")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    if (!id || isNaN(id)) {
      return res.status(400).json({ error: "Invalid notice ID" });
    }

    console.log("Toggling archive for notice ID:", id);
    const result = await pool.query(
      "UPDATE notices SET archived = NOT archived, updated_at = NOW() WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Notice not found" });
    }

    const action = result.rows[0].archived ? "archived" : "unarchived";
    res.json({ message: `Notice ${action} successfully`, notice: result.rows[0] });
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