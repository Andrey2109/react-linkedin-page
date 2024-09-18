import Menu from "./Menu/Menu";
import Content from "./Content/Content";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate to redirect

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFEB3B",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const AppContainer = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchProfiles = async () => {
      const token = localStorage.getItem("token"); // Check for token in localStorage
      if (!token) {
        console.error("No token found. Redirecting to login...");
        navigate("/login"); // Redirect to login if no token
        return;
      }

      try {
        setLoading(true);
        // Fetch profiles from the PostgreSQL endpoint
        const response = await axios.get(
          "http://localhost:3000/api/profiles/postgres",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
          }
        );
        setProfiles(response.data); // Set the fetched profiles into state
      } catch (error) {
        console.error("Error fetching profiles:", error);
        if (error.response?.status === 401) {
          // Token might be expired or invalid, log the user out
          localStorage.removeItem("token");
          navigate("/login"); // Redirect to login if unauthorized
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles(); // Call the fetch function when the component mounts
  }, [navigate]); // Add navigate as a dependency to useEffect

  return (
    <ThemeProvider theme={theme}>
      <Box className="app-container" component="main">
        <Menu />
        {loading ? (
          <CircularProgress
            color="inherit"
            sx={{
              position: "absolute",
              top: "50%",
              left: `calc(20% + 40%)`,
              transform: "translateX(-50%)",
            }}
          />
        ) : (
          <Content profiles={profiles} />
        )}
      </Box>
    </ThemeProvider>
  );
};

export default AppContainer;
