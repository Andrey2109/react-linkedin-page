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
import userImage from "./userImage.png";

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

const TalentCard = () => {
  return (
    <Card
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
          src={userImage}
        >
          OB
        </Avatar>
        <CardContent>
          <Typography variant="h6">Oded Basaraba</Typography>
          <Typography variant="body2">
            3 Years of experience | Years since graduation
          </Typography>
          <Typography variant="body2">
            Github Repos: 41 | Lines of code: 6,139
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
          display="flex"
          gap={1}
          mt={1}
          sx={{
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Chip icon={<CustomCheckCircleIcon />} label="Software Design" />
          <Chip icon={<CustomCheckCircleIcon />} label="System Architecture" />
          <Chip icon={<CustomCheckCircleIcon />} label="Algorithms" />
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
              Ben-Gurion University of Negev
            </Typography>
          </Box>

          {/* LinkedIn Button */}
          <Button
            variant="contained"
            color="primary"
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
              {/* Adjust paddingTop as needed */}
              View Profile On LinkedIn
            </Typography>
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default TalentCard;
