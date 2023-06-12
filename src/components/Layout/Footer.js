import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", p: 3, color: "white" }}
      >
        <Box
          sx={{
            my: 1.5,
            mb: 3,
            "& svg": {
              fontSize: "40px",
              cursor: "pointer",
              mr: 4,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* İcons */}
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <GitHubIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Right Reserved &copy; Wolf Tech
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
