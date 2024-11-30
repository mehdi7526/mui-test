import { fetchProductById } from "../../../services/productService";
import { Product } from "../../../types/product";
import ProductDetails from "../../../components/ProductDetails";
import { Container } from "@mui/material";
import BackButton from "@/app/(product)/components/BackButton";

export const dynamic = "force-dynamic";

interface ProductDetailsPageProps {
  params: { id: string };
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = async ({
  params,
}) => {
  const { id } = await params
  const product: Product = await fetchProductById(Number(id));
  return (
    <Container>
      <BackButton />
      <ProductDetails product={product} />
    </Container>
  );
};

export default ProductDetailsPage;
