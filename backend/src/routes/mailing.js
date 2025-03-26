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
  console.log(`${req.method} /api/mailing${req.path} - User:`, req.user);
  next();
});

// GET /api/mailing - Retrieve all emails
router.get("/", async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }
    const result = await pool.query("SELECT * FROM mailing_list");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching mailing list:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/mailing - Add a new email
router.post("/", async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const result = await pool.query(
      "INSERT INTO mailing_list (email, added_by) VALUES ($1, $2) RETURNING *",
      [email, req.user.id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error adding email:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE /api/mailing/:id - Delete an email
router.delete("/:id", async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const result = await pool.query("DELETE FROM mailing_list WHERE id = $1", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Email not found" });
    }

    res.json({ message: "Email deleted successfully" });
  } catch (error) {
    console.error("Error deleting email:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;