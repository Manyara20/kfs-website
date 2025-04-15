const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const postsRouter = require("./routes/posts");
const jobsRouter = require("./routes/jobs");
const tendersRouter = require("./routes/tenders");
const documentsRouter = require("./routes/documents");
const eventsRouter = require("./routes/events");
const noticesRouter = require("./routes/notices");
const usersRouter = require("./routes/users");
const mailingRouter = require("./routes/mailing");

const { Pool } = require("pg");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    console.log("No token provided in request:", req.url);
    return res.status(401).json({ error: "Unauthorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log("Token verification failed:", err.message, "Token:", token);
      return res.status(403).json({ error: "Forbidden" });
    }
    req.user = user;
    next();
  });
};

// Public tenders route
app.get("/api/tenders/public", async (req, res) => {
  const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
  console.log("Direct handling GET /api/tenders/public");
  try {
    const result = await pool.query("SELECT * FROM tenders WHERE archived = FALSE");
    console.log("Query result:", result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("Error in /api/tenders/public:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  } finally {
    await pool.end();
  }
});

// Public notices route
app.get("/api/notices/public", async (req, res) => {
  const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
  console.log("Direct handling GET /api/notices/public");
  try {
    const result = await pool.query("SELECT * FROM notices WHERE archived = FALSE");
    console.log("Query result:", result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("Error in /api/notices/public:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  } finally {
    await pool.end();
  }
});

// Public events route
app.get("/api/events/public", async (req, res) => {
  const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
  console.log("Direct handling GET /api/events/public");
  try {
    const result = await pool.query("SELECT * FROM events WHERE archived = FALSE");
    console.log("Query result:", result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("Error in /api/events/public:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  } finally {
    await pool.end();
  }
});

// Public posts route (news)
app.get("/api/posts/public", async (req, res) => {
  const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
  console.log("Direct handling GET /api/posts/public");
  try {
    const result = await pool.query("SELECT * FROM posts WHERE archived = FALSE");
    console.log("Query result:", result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("Error in /api/posts/public:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  } finally {
    await pool.end();
  }
});

// Public documents route (public category only)
app.get("/api/documents/public", async (req, res) => {
  const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
  console.log("Direct handling GET /api/documents/public");
  try {
    const result = await pool.query(
      "SELECT * FROM documents WHERE category = 'public' AND archived = FALSE"
    );
    console.log("Query result:", result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("Error in /api/documents/public:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  } finally {
    await pool.end();
  }
});

// Public documents route (legal category only)
app.get("/api/documents/legal", async (req, res) => {
  const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
  console.log("Direct handling GET /api/documents/legal");
  try {
    const result = await pool.query(
      "SELECT * FROM documents WHERE category = 'legal' AND archived = FALSE"
    );
    console.log("Query result:", result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("Error in /api/documents/legal:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  } finally {
    await pool.end();
  }
});

// Public documents route (policy category only)
app.get("/api/documents/policy", async (req, res) => {
  const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
  console.log("Direct handling GET /api/documents/policy");
  try {
    const result = await pool.query(
      "SELECT * FROM documents WHERE category = 'policy' AND archived = FALSE"
    );
    console.log("Query result:", result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("Error in /api/documents/policy:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  } finally {
    await pool.end();
  }
});

// Public jobs route (NEW)
app.get("/api/jobs/public", async (req, res) => {
  const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
  console.log("Direct handling GET /api/jobs/public");
  try {
    const result = await pool.query("SELECT * FROM jobs WHERE archived = FALSE");
    console.log("Query result:", result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("Error in /api/jobs/public:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  } finally {
    await pool.end();
  }
});

// Authenticated routes
app.use("/api/posts", authenticateToken, postsRouter);
app.use("/api/jobs", authenticateToken, jobsRouter);
app.use("/api/tenders", authenticateToken, tendersRouter);
app.use("/api/documents", authenticateToken, documentsRouter);
app.use("/api/events", authenticateToken, eventsRouter);
app.use("/api/notices", authenticateToken, noticesRouter);
app.use("/api/users", authenticateToken, usersRouter);
app.use("/api/mailing", authenticateToken, mailingRouter);

// Login route
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    const user = result.rows[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    await pool.query("UPDATE users SET status = 'online', last_login = NOW() WHERE id = $1", [user.id]);

    const token = jwt.sign(
      { id: user.id, role: user.role, status: "online", last_login: new Date().toISOString() },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    console.log("Generated token:", token);
    res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role, status: "online", last_login: new Date() },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });
  } finally {
    await pool.end();
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));