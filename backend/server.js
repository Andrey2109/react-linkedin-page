const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 3000;

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
