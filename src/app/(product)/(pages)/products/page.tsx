
import { fetchProducts } from "../../services/productService";
import { Product } from "../../types/product";
import ProductCard from "../../components/ProductCard";
import { Container, Grid2, Typography } from "@mui/material";

export const dynamic = "force-dynamic";

const ProductsPage: React.FC = async () => {
  const products: Product[] = await fetchProducts();
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        لیست محصولات
      </Typography>
      <Grid2 container spacing={4}>
        {products.map((product) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default ProductsPage;
