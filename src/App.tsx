import BrandShowcase from './components/BrandShowcase';
import CategoryNavigation from './components/CategoryNavigation';
import CategoryShowcase from './components/CategoryShowcase';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import brand from '@/assets/images/logo.svg';

const brands = [
  {
    id: 1,
    imageUrl: brand,
    alt: 'Marca 1',
  },
  {
    id: 2,
    imageUrl: brand,
    alt: 'Marca 2',
  },
  {
    id: 3,
    imageUrl: brand,
    alt: 'Marca 3',
  },
  {
    id: 4,
    imageUrl: brand,
    alt: 'Marca 4',
  },
  {
    id: 5,
    imageUrl: brand,
    alt: 'Marca 5',
  },
];

function App() {
  return (
    <>
      <Header />
      <main>
        <CategoryNavigation />
        <HeroBanner />
        <CategoryShowcase />
        <BrandShowcase brands={brands} />
      </main>
    </>
  );
}

export default App;
