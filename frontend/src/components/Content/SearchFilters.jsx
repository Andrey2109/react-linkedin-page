import { useState } from "react";
import { Box, Button, Chip, TextField, Typography } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import FilterListIcon from "@mui/icons-material/FilterList";

function SearchFilters() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [sortOption, setSortOption] = useState("Relevance");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    console.log("Search:", event.target.value);
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    console.log("Selected Filter:", filter);
  };

  const handleSortClick = () => {
    const newSort = sortOption === "Relevance" ? "Experience" : "Relevance";
    setSortOption(newSort);
    console.log("Sort By:", newSort);
  };

  return (
    <Box mb={3}>
      <TextField
        label="Search..."
        variant="outlined"
        color="secondary"
        sx={{ width: "60%" }}
        value={searchValue}
        onChange={handleSearchChange}
      />

      <Box my={2}>
        <Typography variant="h4">Find Talents</Typography>

        <Box my={2} display="flex" gap={2} flexWrap="wrap">
          <Chip
            label="Backend"
            color={selectedFilter === "Backend" ? "primary" : "default"}
            clickable
            onClick={() => handleFilterClick("Backend")}
          />
          <Chip
            label="Fullstack"
            color={selectedFilter === "Fullstack" ? "primary" : "default"}
            clickable
            onClick={() => handleFilterClick("Fullstack")}
          />
          <Chip
            label="Android"
            color={selectedFilter === "Android" ? "primary" : "default"}
            clickable
            onClick={() => handleFilterClick("Android")}
          />
          <Chip
            label="IOS"
            color={selectedFilter === "IOS" ? "primary" : "default"}
            clickable
            onClick={() => handleFilterClick("IOS")}
          />
          <Chip
            label="Data"
            color={selectedFilter === "Data" ? "primary" : "default"}
            clickable
            onClick={() => handleFilterClick("Data")}
          />
          <Chip
            label="Science"
            color={selectedFilter === "Science" ? "primary" : "default"}
            clickable
            onClick={() => handleFilterClick("Science")}
          />
          <Chip
            label="DevOps"
            color={selectedFilter === "DevOps" ? "primary" : "default"}
            clickable
            onClick={() => handleFilterClick("DevOps")}
          />
          <Chip
            label="Reset"
            color={selectedFilter === "Reset" ? "primary" : "default"}
            clickable
            icon={<FilterListIcon />}
            onClick={() => handleFilterClick("Reset")}
          />
        </Box>
      </Box>

      <Box display="flex" alignItems="center" gap={2}>
        <Button variant="contained" startIcon={<FilterListIcon />}>
          Filters
        </Button>
        <Button
          variant="outlined"
          startIcon={<SortIcon />}
          onClick={handleSortClick}
          color="secondary"
        >
          Sort By: {sortOption}
        </Button>
      </Box>
    </Box>
  );
}

export default SearchFilters;
