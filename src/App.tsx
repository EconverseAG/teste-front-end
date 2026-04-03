import { Header } from "./components/Header";
import "./components/ProductCard/style.scss";
import { ProductGrid } from "./components/ProductGrid";

function App() {
  return (
    <div>
      <Header />

      <main>
        <ProductGrid />
      </main>
    </div>
  );
}

export default App;
