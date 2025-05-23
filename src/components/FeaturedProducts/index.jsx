// src/components/FeaturedProducts.js
import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import data from "../../assets/data";

const FeaturedProducts = () => {
  return (
    <Box mt={6}>
      <Typography variant="h2" align="center" gutterBottom>
        ✨ Featured Accessories
      </Typography>
      <Grid container spacing={6}>
        {data.map((product, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                image={product.img}
                alt={product.name}
                sx={{
                  maxWidth: "100%", // make it responsive to container
                  maxHeight: "200px", // limit height
                  width: "auto", // maintain aspect ratio
                  height: "auto", // maintain aspect ratio
                  display: "block", // avoid inline spacing
                  margin: "0 auto", // center the image
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
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
