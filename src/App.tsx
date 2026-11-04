import BrandShowcase from './components/BrandShowcase';
import CategoryNavigation from './components/CategoryNavigation';
import CategoryShowcase from './components/CategoryShowcase';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import brand from '@/assets/images/logo.svg';
import PartnerShowcase from './components/PartnerShowcase';
import partner from '@/assets/images/partner.webp';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import RelatedProducts from './components/RelatedProducts';

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

const products = [
  {
    productName: 'Iphone 11 PRO MAX BRANCO 1',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 1',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 15000,
  },
  {
    productName: 'IPHONE 13 MINI 1',
    descriptionShort: 'IPHONE 13 MINI 1',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 9000,
  },
  {
    productName: 'Iphone 11 PRO MAX BRANCO 2',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 2',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 14990,
  },
  {
    productName: 'IPHONE 13 MINI 2',
    descriptionShort: 'IPHONE 13 MINI 2',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 12000,
  },
  {
    productName: 'Iphone 11 PRO MAX BRANCO 3',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 3',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 4550,
  },
  {
    productName: 'IPHONE 13 MINI 3',
    descriptionShort: 'IPHONE 13 MINI 3',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 38000,
  },
  {
    productName: 'Iphone 11 PRO MAX BRANCO 4',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 4',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 42000,
  },
  {
    productName: 'IPHONE 13 MINI 4',
    descriptionShort: 'IPHONE 13 MINI 4',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 520,
  },
  {
    productName: 'Iphone 11 PRO MAX BRANCO 5',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 5',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 149990,
  },
  {
    productName: 'IPHONE 13 MINI 5',
    descriptionShort: 'IPHONE 13 MINI 5',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 100000,
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
        <RelatedProducts products={products} variant="tabs" />
        <PartnerShowcase partners={partners} />
        <RelatedProducts products={products} variant="view-all" />
        <PartnerShowcase partners={partners} />
        <BrandShowcase brands={brands} />
        <RelatedProducts products={products} variant="view-all" />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
