const express = require("express");
const { Pool } = require("pg");
const router = express.Router();
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Middleware to log request details
router.use((req, res, next) => {
  console.log(`${req.method} /api/posts${req.path} - User:`, req.user);
  next();
});

// GET /api/posts - Retrieve all active posts
router.get("/", async (req, res) => {
  try {
    if (req.user.role !== "admin" && req.user.role !== "communication_officer") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }
    const result = await pool.query("SELECT * FROM posts WHERE archived = FALSE");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/posts - Create a new post
router.post("/", async (req, res) => {
  try {
    if (req.user.role !== "admin" && req.user.role !== "communication_officer") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { image, title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const result = await pool.query(
      "INSERT INTO posts (image, title, author_id, content) VALUES ($1, $2, $3, $4) RETURNING *",
      [image || null, title, req.user.id, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT /api/posts/:id - Update an existing post
router.put("/:id", async (req, res) => {
  try {
    if (req.user.role !== "admin" && req.user.role !== "communication_officer") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const { image, title, content } = req.body;

    const result = await pool.query(
      "UPDATE posts SET image = COALESCE($1, image), title = $2, content = $3, updated_at = NOW() WHERE id = $4 AND archived = FALSE RETURNING *",
      [image || null, title, content, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Post not found or already archived" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE /api/posts/:id - Delete a post
router.delete("/:id", async (req, res) => {
  try {
    if (req.user.role !== "admin" && req.user.role !== "communication_officer") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const result = await pool.query("DELETE FROM posts WHERE id = $1 AND archived = FALSE", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Post not found or already archived" });
    }

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/posts/:id/archive - Archive a post
router.patch("/:id/archive", async (req, res) => {
  try {
    if (req.user.role !== "admin" && req.user.role !== "communication_officer") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const result = await pool.query(
      "UPDATE posts SET archived = TRUE, updated_at = NOW() WHERE id = $1 AND archived = FALSE RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Post not found or already archived" });
    }

    res.json({ message: "Post archived successfully", post: result.rows[0] });
  } catch (error) {
    console.error("Error archiving post:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;