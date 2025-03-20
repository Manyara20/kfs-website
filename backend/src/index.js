const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Forbidden" });
    req.user = user;
    next();
  });
};

// Login Route
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  const user = result.rows[0];

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  await pool.query("UPDATE users SET status = 'online', last_login = NOW() WHERE id = $1", [user.id]);

  const token = jwt.sign({ id: user.id, role: user.role, status: "online", last_login: new Date() }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role, status: "online", last_login: new Date() } });
});

// Sample Route: Get Posts
app.get("/api/posts", authenticateToken, async (req, res) => {
  if (req.user.role !== "admin" && req.user.role !== "communication_officer") {
    return res.status(403).json({ error: "Forbidden" });
  }
  const result = await pool.query("SELECT * FROM posts WHERE archived = FALSE");
  res.json(result.rows);
});

// Add more routes...

app.listen(process.env.PORT, () => console.log(`Backend running on port ${process.env.PORT}`));