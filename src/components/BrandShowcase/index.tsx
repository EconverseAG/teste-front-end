import './BrandShowcase.scss';

type Brand = {
  id: number;
  imageUrl: string;
  alt: string;
};

type BrandShowcaseProps = {
  brands: Brand[];
};

function BrandShowcase({ brands }: Readonly<BrandShowcaseProps>) {
  return (
    <section className="brand-showcase" aria-labelledby="brand-showcase-title">
      <h2 id="brand-showcase-title" className="brand-showcase__title">
        Navegue por marcas
      </h2>

      <ul className="brand-showcase__list">
        {brands.map((brand) => (
          <li className="brand-showcase__item" key={brand.id}>
            <img src={brand.imageUrl} alt={brand.alt} loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BrandShowcase;
