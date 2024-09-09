import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import SvgIcon from "@mui/material/SvgIcon";

const CustomCheckCircleIcon = () => {
  return (
    <SvgIcon>
      <circle cx="12" cy="12" r="10" fill="black" />
      <path
        d="M10 15.59L7.71 13.3c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l1.29 1.29 3.29-3.29c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4 4c-.39.39-1.02.39-1.42 0z"
        fill="#FFEB3B"
      />
    </SvgIcon>
  );
};

const TalentCard = ({
  name,
  avatar,
  years_of_experience,
  gradyear,
  linkedin_url,
  education,
  employment,
  technologies,
}) => {
  const currentYear = new Date().getFullYear();
  const graduationYear = parseInt(gradyear, 10);
  const yearsSinceGraduation = currentYear - graduationYear;
  const displayEmployment = employment ? employment : [];
  const skillsArray = technologies
    ? technologies.split(",").map((skill) => skill.trim().toLowerCase())
    : [];
  const uniqueSkills = Array.from(new Set(skillsArray));

  return (
    <Card
      className="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        borderRadius: "16px",
        border: "solid grey 1px",
        margin: 2,
      }}
    >
      {/* Cotainer one */}
      <Box display="flex" alignItems="center">
        <Avatar
          sx={{
            width: 90,
            height: 90,
            mr: 2,
            borderRadius: "16px",
          }}
          src={avatar}
        >
          avatar_photo
        </Avatar>
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2">
            {years_of_experience} Years of experience | {yearsSinceGraduation}{" "}
            Years since graduation
          </Typography>
          <Typography variant="body2">
            Current Employment: {displayEmployment}
          </Typography>
        </CardContent>
      </Box>

      {/* Cotainer two */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          borderRadius: "16px",

          "& .MuiChip-root": {
            fontSize: "0.8rem",
            height: "24px",
            padding: "4px 12px",
            "& .MuiSvgIcon-root": {
              fontSize: "small",
            },
          },
        }}
      >
        <Box
          sx={{
            bgcolor: "#FFEB3B",
            borderRadius: "8px",
            p: "2px 8px",
            mb: 1,
            alignSelf: "flex-start",
            width: "auto",
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.1)",
            minWidth: "250",
            maxWidth: "250",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
            }}
          >
            Skills
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: uniqueSkills.length > 4 ? "1fr 1fr" : "1fr",
            gap: 1,
            mt: 1,
            alignItems: "flex-start",
            flexDirection: uniqueSkills.length > 4 ? "row" : "column",
          }}
        >
          {uniqueSkills.map((skill, index) => (
            <Chip
              key={index}
              icon={<CustomCheckCircleIcon />}
              label={skill}
              size="small"
            />
          ))}
        </Box>{" "}
      </Box>

      {/* Container three */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          textAlign="center"
        >
          {/* Education Section */}

          <Box>
            <SchoolIcon
              sx={{
                width: 30,
                height: 30,
              }}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold" }}
              alignItems="center"
            >
              Education
            </Typography>
            <Typography variant="body2" sx={{ width: "80px" }}>
              {education}
            </Typography>
          </Box>

          {/* LinkedIn Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.open(linkedin_url, "_blank")}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              backgroundColor: "#FFEB3B",
              color: "black",
              width: "40%",
              height: "75px",
              borderRadius: "12px",
              border: "1px solid #e0e0e0",
              boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "#FFD700",
              },
            }}
          >
            <LinkedInIcon
              sx={{
                width: 25,
                height: 25,
                position: "absolute",
                top: "-17px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "black",
                "& path": {
                  fill: "white",
                },
              }}
            />
            <Typography
              variant="body2"
              sx={{ pt: 2, fontSize: "0.75rem", fontWeight: "400" }}
            >
              {" "}
              View Profile On LinkedIn
            </Typography>
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default TalentCard;
