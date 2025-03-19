const express = require("express");
const { Pool } = require("pg");
const router = express.Router();
const pool = new Pool();

router.get("/", async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  const result = await pool.query("SELECT * FROM mailing_list");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { email } = req.body;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  const result = await pool.query(
    "INSERT INTO mailing_list (email) VALUES ($1) RETURNING *",
    [email]
  );
  res.json(result.rows[0]);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  await pool.query("DELETE FROM mailing_list WHERE id = $1", [id]);
  res.json({ message: "Email removed" });
});

module.exports = router;