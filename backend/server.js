const express = require("express");
const cors = require("cors"); // Import CORS module
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 3000;

// CORS configuration to allow requests from your specific frontend origin
const corsOptions = {
  origin: "http://localhost:5173", // The frontend server's URL
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions)); // Use CORS middleware with the specified options

// PostgreSQL pool setup
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
