const express = require("express");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const router = express.Router();
const pool = new Pool();

router.get("/", async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  const result = await pool.query("SELECT id, name, email, role, status, last_login FROM users");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { name, email, password, role } = req.body;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await pool.query(
    "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, email, hashedPassword, role]
  );
  res.json(result.rows[0]);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  const hashedPassword = password ? await bcrypt.hash(password, 10) : null;
  const result = await pool.query(
    "UPDATE users SET name = $1, email = $2, password = COALESCE($3, password), role = $4 WHERE id = $5 RETURNING *",
    [name, email, hashedPassword, role, id]
  );
  res.json(result.rows[0]);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  await pool.query("DELETE FROM users WHERE id = $1", [id]);
  res.json({ message: "User deleted" });
});

module.exports = router;