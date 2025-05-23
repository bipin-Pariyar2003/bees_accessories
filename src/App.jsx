// src/App.js
import React from "react";
import { ThemeProvider, Container } from "@mui/material";
import theme from "./theme";
import HeroSection from "components/HeroSection";
import FeaturedProducts from "components/FeaturedProducts";
import Footer from "components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <HeroSection />
        <FeaturedProducts />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
