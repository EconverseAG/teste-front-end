import { Logo } from '../Logo/Logo';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import './BrandsSection.scss';

const brands = ['brand-one', 'brand-two', 'brand-three', 'brand-four', 'brand-five'];

export function BrandsSection() {
  return (
    <section className="brands-section container" aria-labelledby="brands-title">
      <SectionTitle id="brands-title" title="Navegue por marcas" withLines={false} />
      <ul className="brands-section__list">
        {brands.map((brandId) => (
          <li key={brandId} className="brands-section__item">
            <a className="brands-section__link" href="#marcas" aria-label="Ver produtos da marca Econverse">
              <Logo />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
