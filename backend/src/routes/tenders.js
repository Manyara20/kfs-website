const express = require("express");
const { Pool } = require("pg");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const pool = new Pool();
const upload = multer({ dest: "uploads/" });

router.get("/", async (req, res) => {
  if (req.user.role !== "admin" && req.user.role !== "supply_chain") {
    return res.status(403).json({ error: "Forbidden" });
  }
  const result = await pool.query("SELECT * FROM tenders WHERE archived = FALSE");
  res.json(result.rows);
});

router.post("/", upload.single("pdf"), async (req, res) => {
  const { description } = req.body;
  const pdfUrl = `/uploads/${req.file.filename}`;
  if (req.user.role !== "admin" && req.user.role !== "supply_chain") {
    return res.status(403).json({ error: "Forbidden" });
  }
  const result = await pool.query(
    "INSERT INTO tenders (pdf_url, description) VALUES ($1, $2) RETURNING *",
    [pdfUrl, description]
  );
  res.json(result.rows[0]);
});

router.put("/:id", upload.single("pdf"), async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  const pdfUrl = req.file ? `/uploads/${req.file.filename}` : null;
  if (req.user.role !== "admin" && req.user.role !== "supply_chain") {
    return res.status(403).json({ error: "Forbidden" });
  }
  const result = await pool.query(
    "UPDATE tenders SET pdf_url = COALESCE($1, pdf_url), description = $2 WHERE id = $3 RETURNING *",
    [pdfUrl, description, id]
  );
  res.json(result.rows[0]);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (req.user.role !== "admin" && req.user.role !== "supply_chain") {
    return res.status(403).json({ error: "Forbidden" });
  }
  await pool.query("DELETE FROM tenders WHERE id = $1", [id]);
  res.json({ message: "Tender deleted" });
});

router.patch("/:id/archive", async (req, res) => {
  const { id } = req.params;
  if (req.user.role !== "admin" && req.user.role !== "supply_chain") {
    return res.status(403).json({ error: "Forbidden" });
  }
  await pool.query("UPDATE tenders SET archived = TRUE WHERE id = $1", [id]);
  res.json({ message: "Tender archived" });
});

module.exports = router;