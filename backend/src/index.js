const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const multer = require("multer");
require("dotenv").config();

const postsRouter = require("./routes/posts");
const jobsRouter = require("./routes/jobs");
const tendersRouter = require("./routes/tenders");
const documentsRouter = require("./routes/documents");
const eventsRouter = require("./routes/events");
const noticesRouter = require("./routes/notices");
const usersRouter = require("./routes/users");
const mailingRouter = require("./routes/mailing");

const app = express();
app.use(cors({ origin: "http://localhost:3000" })); 
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// File upload setup
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Authentication middleware
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

// Login Route
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
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
  }
});

// Mount routes
app.use("/api/posts", authenticateToken, postsRouter);
app.use("/api/jobs", authenticateToken, jobsRouter);
app.use("/api/tenders", authenticateToken, tendersRouter);
app.use("/api/documents", authenticateToken, documentsRouter);
app.use("/api/events", authenticateToken, eventsRouter);
app.use("/api/notices", authenticateToken, noticesRouter);
app.use("/api/users", authenticateToken, usersRouter);
app.use("/api/mailing", authenticateToken, mailingRouter);

app.listen(process.env.PORT, () => console.log(`Backend running on port ${process.env.PORT}`));