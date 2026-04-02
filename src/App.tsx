import { ProductCard } from "./components/ProductCard";
import type { Product } from "./types/product";
import "./components/ProductCard/style.scss";

function App() {
  const mockProduct = {
    productName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descriptionShort: "Iphone 11 PRO MAX BRANCO 1",
    photo:
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 289,
  };

  const handleOpenModal = (product: Product) => {
    alert(`Abrindo modal de: ${product.productName}`);
  };

  return <ProductCard product={mockProduct} openModal={handleOpenModal} />;
}

export default App;
