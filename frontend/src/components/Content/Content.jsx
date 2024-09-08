import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import SearchFilters from "./SearchFilters";
import TalentCard from "./TalentCard";

const drawerWidth = "80%";

const Content = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profiles");
        setProfiles(response.data); // Set the fetched profiles into state
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles(); // Call the fetch function when the component mounts
  }, []);

  return (
    <Box className="content-container" sx={{ width: drawerWidth, p: 1 }}>
      <SearchFilters />
      <Box>
        {profiles?.map((profile) => (
          <TalentCard
            name={profile.name}
            avatar={profile.avatar}
            years_of_experience={profile.years_of_experience}
            gradyear={profile.gradyear}
            linkedin_url={profile.url}
            education={profile.latest_education}
            employment={profile.current_employment}
            key={`${profile.id}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Content;
