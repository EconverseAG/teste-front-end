import './HeroBanner.scss';

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="container banner-content">
        <div className="banner-texts">
          <h1>
            Venha conhecer nossas
            <br />
            promoções
          </h1>
          <p>
            <strong>50% Off</strong> nos produtos
          </p>
          <a className="yellow-btn" href="#vitrine-1">
            Ver produtos
          </a>
        </div>
      </div>
    </section>
  );
}
