import BrandShowcase from './components/BrandShowcase';
import CategoryNavigation from './components/CategoryNavigation';
import CategoryShowcase from './components/CategoryShowcase';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import brand from '@/assets/images/logo.svg';
import PartnerShowcase from './components/PartnerShowcase';
import partner from '@/assets/images/partner.webp';
import Newsletter from './components/Newsletter';

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

const partners = [
  {
    id: 1,
    imageUrl: partner,
    alt: 'Parceiro 1',
    title: 'Parceiro 1',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    href: '#',
  },
  {
    id: 2,
    imageUrl: partner,
    alt: 'Parceiro 2',
    title: 'Parceiro 2',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    href: '#',
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
        <PartnerShowcase partners={partners} />
        <PartnerShowcase partners={partners} />
        <BrandShowcase brands={brands} />
        <Newsletter />
      </main>
    </>
  );
}

export default App;
