import './Banner.scss';

export function Banner() {
  return (
    <section className="banner" aria-labelledby="banner-title">
      <div className="banner__content">
        <h1 id="banner-title" className="banner__title">
          Venha conhecer nossas promoções
        </h1>
        <p className="banner__subtitle">
          <strong>50% Off</strong> nos produtos
        </p>
        <a href="#produtos" className="banner__button">
          Ver produto
        </a>
      </div>
    </section>
  );
}