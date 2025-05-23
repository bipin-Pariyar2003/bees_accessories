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
          src="/assets/logo/logo.png"
          alt="Accessories"
          style={{ borderRadius: "20px", maxWidth: "30%", height: "auto" }}
        />
      </Box>
      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component="a"
          href="https://www.instagram.com/bees.accessories_?igsh=MWh0N3Nsajc0aHB1Ng%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
