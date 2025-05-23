// src/components/FeaturedProducts.js
import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const sampleProducts = [
  {
    name: "Honeycomb Earrings",
    img: "https://via.placeholder.com/150.png?text=Earrings",
  },
  {
    name: "Flower Necklace",
    img: "https://via.placeholder.com/150.png?text=Necklace",
  },
  {
    name: "Bee Bracelet",
    img: "https://via.placeholder.com/150.png?text=Bracelet",
  },
];

const FeaturedProducts = () => {
  return (
    <Box mt={6}>
      <Typography variant="h2" align="center" gutterBottom>
        ✨ Featured Accessories
      </Typography>
      <Grid container spacing={3}>
        {sampleProducts.map((product, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.img}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  {product.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;
