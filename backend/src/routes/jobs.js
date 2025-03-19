const express = require("express");
const { Pool } = require("pg");
const router = express.Router();
const pool = new Pool();

router.get("/", async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  const result = await pool.query("SELECT * FROM jobs WHERE archived = FALSE");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { title, description, duties, requirements } = req.body;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  const result = await pool.query(
    "INSERT INTO jobs (title, description, duties, requirements) VALUES ($1, $2, $3, $4) RETURNING *",
    [title, description, duties, requirements]
  );
  res.json(result.rows[0]);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, duties, requirements } = req.body;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  const result = await pool.query(
    "UPDATE jobs SET title = $1, description = $2, duties = $3, requirements = $4 WHERE id = $5 RETURNING *",
    [title, description, duties, requirements, id]
  );
  res.json(result.rows[0]);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  await pool.query("DELETE FROM jobs WHERE id = $1", [id]);
  res.json({ message: "Job deleted" });
});

router.patch("/:id/archive", async (req, res) => {
  const { id } = req.params;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  await pool.query("UPDATE jobs SET archived = TRUE WHERE id = $1", [id]);
  res.json({ message: "Job archived" });
});

module.exports = router;