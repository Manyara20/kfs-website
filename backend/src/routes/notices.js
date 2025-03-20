const express = require("express");
const { Pool } = require("pg");
const multer = require("multer");
const router = express.Router();
const pool = new Pool();
const upload = multer({ dest: "uploads/" });

router.get("/", async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  const result = await pool.query("SELECT * FROM notices WHERE archived = FALSE");
  res.json(result.rows);
});

router.post("/", upload.single("file"), async (req, res) => {
  const { title, description } = req.body;
  const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  const result = await pool.query(
    "INSERT INTO notices (title, description, file_url) VALUES ($1, $2, $3) RETURNING *",
    [title, description, fileUrl]
  );
  res.json(result.rows[0]);
});

router.put("/:id", upload.single("file"), async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  const result = await pool.query(
    "UPDATE notices SET title = $1, description = $2, file_url = COALESCE($3, file_url) WHERE id = $4 RETURNING *",
    [title, description, fileUrl, id]
  );
  res.json(result.rows[0]);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  await pool.query("DELETE FROM notices WHERE id = $1", [id]);
  res.json({ message: "Notice deleted" });
});

router.patch("/:id/archive", async (req, res) => {
  const { id } = req.params;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  await pool.query("UPDATE notices SET archived = TRUE WHERE id = $1", [id]);
  res.json({ message: "Notice archived" });
});

module.exports = router;