const express = require("express");
const { Pool } = require("pg");
const multer = require("multer");
const router = express.Router();
const pool = new Pool();
const upload = multer({ dest: "uploads/" });

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM documents WHERE archived = FALSE");
  res.json(result.rows);
});

router.post("/", upload.single("pdf"), async (req, res) => {
  const { category, description } = req.body;
  const pdfUrl = `/uploads/${req.file.filename}`;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  const result = await pool.query(
    "INSERT INTO documents (category, pdf_url, description) VALUES ($1, $2, $3) RETURNING *",
    [category, pdfUrl, description]
  );
  res.json(result.rows[0]);
});

router.put("/:id", upload.single("pdf"), async (req, res) => {
  const { id } = req.params;
  const { category, description } = req.body;
  const pdfUrl = req.file ? `/uploads/${req.file.filename}` : null;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  const result = await pool.query(
    "UPDATE documents SET category = $1, pdf_url = COALESCE($2, pdf_url), description = $3 WHERE id = $4 RETURNING *",
    [category, pdfUrl, description, id]
  );
  res.json(result.rows[0]);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  await pool.query("DELETE FROM documents WHERE id = $1", [id]);
  res.json({ message: "Document deleted" });
});

router.patch("/:id/archive", async (req, res) => {
  const { id } = req.params;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  await pool.query("UPDATE documents SET archived = TRUE WHERE id = $1", [id]);
  res.json({ message: "Document archived" });
});

module.exports = router;