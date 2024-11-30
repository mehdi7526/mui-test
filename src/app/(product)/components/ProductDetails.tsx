import React from "react";
import { Product } from "../types/product";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <Card>
      <CardMedia component="img" sx={{width:200}} image={product.image} alt={product.title} />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          قیمت: ${product.price}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
