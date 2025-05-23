// src/components/Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Box mt={6} py={4} textAlign="center" bgcolor="#fff8e1" borderRadius="16px">
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Bee’s Accessories 🐝{" "}
        <Link
          href="https://www.instagram.com/bees.accessories_?igsh=MWh0N3Nsajc0aHB1Ng%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          color="inherit"
        >
          Follow us on Instagram 💕
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
