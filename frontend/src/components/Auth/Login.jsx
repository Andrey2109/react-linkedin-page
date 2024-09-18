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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://react-linkedin-page.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );
      // Save token to localStorage
      localStorage.setItem("token", response.data.token);
      console.log("Login successful:", response.data);
      navigate("/"); // Redirect to the homepage after login
    } catch (error) {
      console.error("Login error:", error.response?.data);
      setError(error.response?.data?.message || "Invalid credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      <Typography variant="h4" mb={2}>
        Login
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
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
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
      )}
      <Button
        color="secondary"
        onClick={() => navigate("/register")}
        sx={{ mt: 2 }}
      >
        Don't have an account? Register
      </Button>
    </Box>
  );
};

export default Login;
