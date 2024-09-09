import { useState } from "react";
import { Box, Button, Chip, TextField, Typography } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import FilterListIcon from "@mui/icons-material/FilterList";

function SearchFilters({
  handleSearchChange,
  handleFilterClick,
  handleSortClick,
  searchValue,
  sortOption,
  selectedFilter,
}) {
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
            label="Web"
            color={selectedFilter === "Web" ? "primary" : "default"}
            clickable
            onClick={() => handleFilterClick("Web")}
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
