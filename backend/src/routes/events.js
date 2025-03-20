const express = require("express");
const { Pool } = require("pg");
const router = express.Router();
const pool = new Pool();

router.get("/", async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  const result = await pool.query("SELECT * FROM events WHERE archived = FALSE");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { title, date, time, venue, flag } = req.body;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  const result = await pool.query(
    "INSERT INTO events (title, date, time, venue, flag) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [title, date, time, venue, flag]
  );
  res.json(result.rows[0]);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, date, time, venue, flag } = req.body;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  const result = await pool.query(
    "UPDATE events SET title = $1, date = $2, time = $3, venue = $4, flag = $5 WHERE id = $6 RETURNING *",
    [title, date, time, venue, flag, id]
  );
  res.json(result.rows[0]);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  await pool.query("DELETE FROM events WHERE id = $1", [id]);
  res.json({ message: "Event deleted" });
});

router.patch("/:id/archive", async (req, res) => {
  const { id } = req.params;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  await pool.query("UPDATE events SET archived = TRUE WHERE id = $1", [id]);
  res.json({ message: "Event archived" });
});

module.exports = router;