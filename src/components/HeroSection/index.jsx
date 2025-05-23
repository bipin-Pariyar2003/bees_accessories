// src/components/HeroSection.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box textAlign="center" py={5}>
      <Typography variant="h1" fontSize={{ xs: "2.5rem", sm: "3rem" }} color="primary">
        Bee’s Accessories 🐝
      </Typography>
      <Typography
        variant="h2"
        fontSize={{ xs: "1.2rem", sm: "1.5rem" }}
        color="secondary"
        mt={2}
      >
        Styled with love & sparkle 💫
      </Typography>
      <Box mt={4}>
        <img
          src="https://via.placeholder.com/300x200.png?text=Your+Hero+Image"
          alt="Accessories"
          style={{ borderRadius: "20px", maxWidth: "100%", height: "auto" }}
        />
      </Box>
      <Box mt={4}>
        <Button variant="contained" color="primary" size="large">
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
