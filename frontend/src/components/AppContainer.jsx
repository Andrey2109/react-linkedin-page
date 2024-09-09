import Menu from "./Menu/Menu";
import Content from "./Content/Content";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
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
        {loading ? <h1>Loading...</h1> : <Content profiles={profiles} />}
      </Box>
    </ThemeProvider>
  );
};

export default AppContainer;
