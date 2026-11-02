import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Categories } from './components/categories/Categories'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Categories />
      </main>
    </>
  );
}