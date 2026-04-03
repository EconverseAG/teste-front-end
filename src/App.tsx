import { Header } from "./components/Header";
import { MainBanner } from "./components/MainBanner";
import "./components/ProductCard/style.scss";
import { ProductGrid } from "./components/ProductGrid";

function App() {
  return (
    <div>
      <Header />

      <main>
        <MainBanner />

        <ProductGrid />
      </main>
    </div>
  );
}

export default App;
