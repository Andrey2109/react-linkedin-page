import {
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";
import SearchFilters from "./SearchFilters";
import TalentCard from "./TalentCard";
import { useState, useEffect } from "react";
import { TablePagination } from "@mui/material";

const drawerWidth = "80%";

const Content = ({ profiles }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [sortOption, setSortOption] = useState("Relevance");
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page to 0 when changing the number of rows per page
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    setPage(0);
    console.log("Search:", event.target.value);
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setPage(0);
    console.log("Selected Filter:", filter);
  };

  const handleSortClick = () => {
    const newSort = sortOption === "Relevance" ? "Experience" : "Relevance";
    setSortOption(newSort);
    setPage(0);
    console.log("Sort By:", newSort);
  };

  // Added useEffect hook here
  useEffect(() => {
    const filterAndSortProfiles = () => {
      let filtered = profiles.filter((profile) => {
        return profile.name.toLowerCase().includes(searchValue.toLowerCase());
      });

      // Additional filter logic based on `selectedFilter`
      if (selectedFilter && selectedFilter !== "Reset") {
        filtered = filtered.filter((profile) => {
          return profile.industry_classification
            .trim()
            .toLowerCase()
            .includes(selectedFilter.toLowerCase().trim());
        });
      }

      // Sorting logic
      if (sortOption === "Experience") {
        filtered.sort((a, b) => b.years_of_experience - a.years_of_experience);
      }

      setFilteredProfiles(filtered);
    };
    filterAndSortProfiles();
  }, [profiles, searchValue, selectedFilter, sortOption]);

  return (
    <Box className="content-container" sx={{ width: drawerWidth, p: 1 }}>
      <SearchFilters
        handleFilterClick={handleFilterClick}
        handleSearchChange={handleSearchChange}
        handleSortClick={handleSortClick}
        searchValue={searchValue}
        selectedFilter={selectedFilter}
        sortOption={sortOption}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {filteredProfiles
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((profile) => (
                <TableRow key={`${profile.id}`}>
                  <TableCell sx={{ padding: "0px" }}>
                    <TalentCard
                      name={profile.name}
                      avatar={profile.avatar}
                      years_of_experience={profile.years_of_experience}
                      gradyear={profile.gradyear}
                      linkedin_url={profile.url}
                      education={profile.latest_education}
                      employment={profile.current_employment}
                      technologies={profile.technologies}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={filteredProfiles.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
};

export default Content;
