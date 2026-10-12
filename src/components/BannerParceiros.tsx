import "../style/BannerParceiros.scss";
import parceiroImg from "../assets/banners/BannerParc.png";
function BannerParceiros() {
  return (
    <section className="banner-parceiros" aria-labelledby="partners-title">
      <h2 className="banner-parceiros__title" id="partners-title">
        Nossos parceiros
      </h2>
      <div className="banner-parceiros__list">
        {[1, 2].map((partner) => (
          <article className="banner-parceiros__card" key={partner}>
            <div className="banner-parceiros__scene" aria-hidden="true">
              <img src={parceiroImg} alt="" />
            </div>
            <div className="banner-parceiros__content">
              <h3 className="banner-parceiros__name">Parceiros</h3>
              <p className="banner-parceiros__description">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <a className="banner-parceiros__button" href="/">
                Confira
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BannerParceiros;
