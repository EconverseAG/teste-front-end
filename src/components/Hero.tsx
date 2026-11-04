export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__image" />
      <div className="hero__content page-width">
        <p className="hero__eyebrow">Ofertas especiais</p>
        <h1 id="hero-title">Venha conhecer nossas<br />promoções</h1>
        <p className="hero__offer"><strong>50% Off</strong> nos produtos</p>
        <a className="button button--yellow" href="#produtos">Ver produto</a>
      </div>
    </section>
  );
}
