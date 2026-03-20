import { lazy } from "react";

const NavigateByBrands = lazy(() => import("./NavigateByBrands"));
const Partners = lazy(() => import("./Partners"));
const MainBanner = lazy(() => import("./MainBanner"));
const Mosaic = lazy(() => import("./Mosaic"));
const ProductsShelf = lazy(() => import("../../commons/ProductsShelf"));

const Home = () => {
  return (
    <main>
      <MainBanner />
      <Mosaic />
      <ProductsShelf isVisibleFilters title="Produtos relacionados" />
      <Partners />
      <ProductsShelf isSeeAllButton title="Produtos relacionados" />
      <Partners />
      <NavigateByBrands />
      <ProductsShelf isSeeAllButton title="Produtos relacionados" />
    </main>
  );
};

export default Home;
