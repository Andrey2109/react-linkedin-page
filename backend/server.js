require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT;
const authRouter = require("./routes/auth");
const auth = require("./middleware/auth");
const Profile = require("./models/Profile");
const adminRouter = require("./routes/admin");

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : [];
console.log("Allowed Origins:", allowedOrigins);

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.use(express.json());

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);

app.get("/profiles", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM profiles_example");
    res.json(rows);
  } catch (error) {
    console.error("Failed to fetch profiles:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/profiles", auth, async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", [
      "username",
      "email",
    ]);
    res.json(profiles);
  } catch (error) {
    console.error("Failed to fetch profiles:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
