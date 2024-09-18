import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://react-linkedin-page.onrender.com/api/auth/register",
        {
          username,
          email,
          password,
        }
      );
      console.log("Registration successful:", response.data);
      navigate("/login"); // Redirect to login page after registration
    } catch (error) {
      console.error("Registration error:", error.response?.data);
      setError(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      <Typography variant="h4" mb={2}>
        Register
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <Button
          variant="contained"
          color="#FFD700"
          fullWidth
          onClick={handleRegister}
        >
          Register
        </Button>
      )}
      <Button
        color="secondary"
        onClick={() => navigate("/login")}
        sx={{ mt: 2 }}
      >
        Already have an account? Login
      </Button>
    </Box>
  );
};

export default Register;
