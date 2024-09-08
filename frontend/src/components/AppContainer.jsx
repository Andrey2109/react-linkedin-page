import Menu from "./Menu/Menu";
import Content from "./Content/Content";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
  return (
    <ThemeProvider theme={theme}>
      <Box className="app-container" component="main" >
        <Menu />
        <Content />
      </Box>
    </ThemeProvider>
  );
};

export default AppContainer;
