const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 3000;

// List of allowed origins
const allowedOrigins = [
  "http://site.talentsplease.s3-website-us-west-2.amazonaws.com",
  "https://d1blze4d54x3w2.cloudfront.net",
];

// CORS middleware configuration
const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions)); // Use CORS middleware with options

const pool = new Pool({
  host: "node128.codingbc.com",
  database: "postgres",
  user: "postgres",
  password: "Dec2017890#",
  port: 7892,
});

app.use(express.json()); // Middleware for parsing JSON bodies

// Route to fetch all profiles
app.get("/profiles", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM profiles_example");
    res.json(rows);
  } catch (error) {
    console.error("Failed to fetch profiles:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
