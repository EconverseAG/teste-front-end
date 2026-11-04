export function PartnerBanners() {
  return (
    <section className="partner-banners page-width" aria-label="Conheça nossos parceiros">
      {[1, 2].map((number) => (
        <article className={`partner-banner partner-banner--${number}`} key={number}>
          <div><h2>Parceiros</h2><p>Descubra ofertas especiais<br />para você aproveitar.</p><a className="button button--yellow" href="#marcas">Confira</a></div>
        </article>
      ))}
    </section>
  );
}
