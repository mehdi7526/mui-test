import React from "react";
import { Product } from "../types/product";
import Link from "next/link";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  
  return (
    <Card>
      <CardMedia
        component="img"
        sx={{ height: 200 }}
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          قیمت: ${product.price}
        </Typography>
        <Link href={`/products/${product.id}`} passHref>
          <Button variant="contained" className="bg-yellow-400" fullWidth>
            مشاهده جزئیات
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
