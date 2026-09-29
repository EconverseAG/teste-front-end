import { BRANDS } from '../../data/content';
import './BrandsSection.scss';

export default function BrandsSection() {
  return (
    <section className="container brands-section" aria-labelledby="marcas-titulo">
      <h2 className="section-title" id="marcas-titulo">
        Navegue por marcas
      </h2>

      <ul className="brands-container">
        {BRANDS.map((marca, index) => (
          <li className="brand-circle" key={index}>
            <img src={marca} alt={`Marca ${index + 1}`} loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  );
}
