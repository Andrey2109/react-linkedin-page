import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppContainer from "./components/AppContainer";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

const App = () => {
  return (
    <Router>
      <Box>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<AppContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
