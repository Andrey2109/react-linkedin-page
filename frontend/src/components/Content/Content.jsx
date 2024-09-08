import { Box } from "@mui/material";
import SearchFilters from "./SearchFilters";
import TalentCard from "./TalentCard";

const drawerWidth = "80%";

const Content = () => {
  return (
    <Box className="content-container" sx={{ width: drawerWidth, p: 1 }}>
      <SearchFilters />
      <Box>
        <TalentCard />
        <TalentCard />
      </Box>
    </Box>
  );
};

export default Content;
