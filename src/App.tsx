import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Categories } from './components/categories/Categories'
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Categories />
        <ProductShowcase />
      </main>
    </>
  );
}