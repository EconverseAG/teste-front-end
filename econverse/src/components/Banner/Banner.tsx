import './Banner.scss';

export function Banner() {
  return (
    <section className="hero-banner" aria-labelledby="hero-banner-title">
      <div className="hero-banner__content container">
        <h1 id="hero-banner-title" className="hero-banner__title">
          Venha conhecer nossas promoções
        </h1>
        <p className="hero-banner__subtitle">
          <strong>50% Off</strong> nos produtos
        </p>
        <a className="hero-banner__button" href="#produtos">
          Ver produto
        </a>
      </div>
    </section>
  );
}
