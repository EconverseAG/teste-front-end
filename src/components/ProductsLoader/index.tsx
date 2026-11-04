import { productsPromise } from '@/queries/products';
import RelatedProducts from '@/components/RelatedProducts';

type ProductsLoaderProps = {
  variant?: 'tabs' | 'view-all';
};

function ProductsLoader({ variant }: Readonly<ProductsLoaderProps>) {
  return <RelatedProducts productsPromise={productsPromise} variant={variant} />;
}

export default ProductsLoader;
