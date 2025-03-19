const express = require("express");
const { Pool } = require("pg");
const router = express.Router();
const pool = new Pool();

router.get("/", async (req, res) => {
  if (req.user.role !== "admin" && req.user.role !== "communication_officer") {
    return res.status(403).json({ error: "Forbidden" });
  }
  const result = await pool.query("SELECT * FROM posts WHERE archived = FALSE");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { image, title, content } = req.body;
  if (req.user.role !== "admin" && req.user.role !== "communication_officer") {
    return res.status(403).json({ error: "Forbidden" });
  }
  const result = await pool.query(
    "INSERT INTO posts (image, title, author_id, content) VALUES ($1, $2, $3, $4) RETURNING *",
    [image, title, req.user.id, content]
  );
  res.json(result.rows[0]);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { image, title, content } = req.body;
  const result = await pool.query(
    "UPDATE posts SET image = $1, title = $2, content = $3 WHERE id = $4 AND (author_id = $5 OR $6 = 'admin') RETURNING *",
    [image, title, content, id, req.user.id, req.user.role]
  );
  res.json(result.rows[0]);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM posts WHERE id = $1 AND (author_id = $2 OR $3 = 'admin')", [id, req.user.id, req.user.role]);
  res.json({ message: "Post deleted" });
});

router.patch("/:id/archive", async (req, res) => {
  const { id } = req.params;
  await pool.query(
    "UPDATE posts SET archived = TRUE WHERE id = $1 AND (author_id = $2 OR $3 = 'admin')",
    [id, req.user.id, req.user.role]
  );
  res.json({ message: "Post archived" });
});

module.exports = router;