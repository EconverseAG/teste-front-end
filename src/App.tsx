
import { useEffect, useState } from "react";
import type { Product } from "./types/product";
import { getProducts } from "./services/productService";
import ProductList from "./components/ProductList";
import "./App.scss";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);

        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Não foi possível carregar os produtos.");
        }
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);

  return (
    <main className="app">
      <header className="app__header">
        <h1>Vitrine de produtos</h1>
        <p>Confira nossos produtos</p>
      </header>

      {loading && <p>Carregando produtos...</p>}

      {error && <p role="alert">{error}</p>}

      {!loading && !error && (
        <ProductList
          products={products}
          onSelectProduct={setSelectedProduct}
        />
      )}

      {selectedProduct && (
        <div
          className="product-modal"
          onClick={() => setSelectedProduct(null)}
        >
          <section
            className="product-modal__content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-product-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="product-modal__close"
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label="Fechar detalhes do produto"
            >
              ×
            </button>

            <img
              className="product-modal__image"
              src={selectedProduct.photo}
              alt={selectedProduct.productName}
            />

            <div className="product-modal__details">
              <h2 id="modal-product-title">
                {selectedProduct.productName}
              </h2>

              <p>{selectedProduct.descriptionShort}</p>

              <strong>{formatPrice(selectedProduct.price)}</strong>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
