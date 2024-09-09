import Menu from "./Menu/Menu";
import Content from "./Content/Content";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

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

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/profiles");
        setProfiles(response.data); // Set the fetched profiles into state
      } catch (error) {
        console.error("Error fetching profiles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfiles(); // Call the fetch function when the component mounts
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box className="app-container" component="main">
        <Menu />
        {loading ? (
          <CircularProgress
            color="inherit"
            sx={{
              position: "absolute", // Positions it relative to the nearest positioned ancestor (instead of just where it would normally appear in the flow).
              top: "50%", // Centers it vertically
              left: `calc(20% + 40%)`, // Moves it 40% from the left edge of the content area, which starts at 20% of the viewport
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
