import { Box } from "@mui/material";
import SearchFilters from "./SearchFilters";
import TalentCard from "./TalentCard";
import { useState, useEffect } from "react";

const drawerWidth = "80%";

const Content = ({ profiles }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [sortOption, setSortOption] = useState("Relevance");
  const [filteredProfiles, setFilteredProfiles] = useState([]);

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

  // Added useEffect hook here
  useEffect(() => {
    const filterAndSortProfiles = () => {
      let filtered = profiles.filter((profile) => {
        return profile.name.toLowerCase().includes(searchValue.toLowerCase());
      });

      // Additional filter logic based on `selectedFilter`
      if (selectedFilter && selectedFilter !== "Reset") {
        filtered = filtered.filter((profile) => {
          return (
            profile.industry_classification.toLowerCase() ===
            selectedFilter.toLowerCase()
          );
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
      <Box>
        {filteredProfiles?.map((profile) => (
          <TalentCard
            name={profile.name}
            avatar={profile.avatar}
            years_of_experience={profile.years_of_experience}
            gradyear={profile.gradyear}
            linkedin_url={profile.url}
            education={profile.latest_education}
            employment={profile.current_employment}
            technologies={profile.technologies}
            key={`${profile.id}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Content;
