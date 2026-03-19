import "./Hero.scss";

const Banner = () => {
  return (
    <section className="banner" aria-label="Banner de promoções">
      <img
        src="/images/banner.webp"
        alt="Banner de promoções"
      className="banner__img"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />
      <div className="container banner__content">
        <div>
          <h1 className="banner__title">
            Venha conhecer nossas <span>promoções</span>
          </h1>
          <p className="banner__subtitle">
            <span>50% Off</span> nos produtos{" "}
          </p>
        </div>
        <a href="#" className="btn--primary" title="Confira nossos produtos">
          Ver produto
        </a>
      </div>
      <div className="banner__overlay"></div>
    </section>
  );
};

export default Banner;
