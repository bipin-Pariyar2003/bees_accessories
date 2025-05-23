// src/components/Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mt={6} py={4} textAlign="center" bgcolor="#fff8e1" borderRadius="16px">
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Bee’s Accessories 🐝 | Follow us on Instagram 💕
      </Typography>
    </Box>
  );
};

export default Footer;
