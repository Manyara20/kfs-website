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
  destination: "./uploads/",
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

// Middleware to log request details
router.use((req, res, next) => {
  console.log(`${req.method} /api/posts${req.path} - User:`, req.user);
  next();
});

// GET /api/posts - Retrieve all posts (admin or communication_officer)
router.get("/", async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "communication_officer")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }
    const result = await pool.query("SELECT * FROM posts");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching posts:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// POST /api/posts - Create a new post (admin or communication_officer)
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "communication_officer")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
    const result = await pool.query(
      "INSERT INTO posts (image, title, content, user_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [imageUrl, title, content, req.user.id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating post:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// PUT /api/posts/:id - Update an existing post (admin or communication_officer)
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "communication_officer")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const { title, content } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const result = await pool.query(
      "UPDATE posts SET image = COALESCE($1, image), title = $2, content = $3, updated_at = NOW() WHERE id = $4 RETURNING *",
      [imageUrl, title, content, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating post:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// DELETE /api/posts/:id - Delete a post (admin or communication_officer)
router.delete("/:id", async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "communication_officer")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const result = await pool.query("DELETE FROM posts WHERE id = $1", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// PATCH /api/posts/:id/archive - Toggle archive status of a post (admin or communication_officer)
router.patch("/:id/archive", async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "communication_officer")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    if (!id || isNaN(id)) {
      return res.status(400).json({ error: "Invalid post ID" });
    }

    console.log("Toggling archive for post ID:", id);
    const result = await pool.query(
      "UPDATE posts SET archived = NOT archived, updated_at = NOW() WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Post not found" });
    }

    const action = result.rows[0].archived ? "archived" : "unarchived";
    res.json({ message: `Post ${action} successfully`, post: result.rows[0] });
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