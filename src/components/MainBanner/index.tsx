import "./style.scss";
import bannerImg from "../../assets/Banner.svg"; // Importe a imagem aqui

export const MainBanner = () => {
  const bannerStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 85.04%), url(${bannerImg})`,
  };

  return (
    <section className="main-banner__container" style={bannerStyle}>
      <div className="main-banner__content">
        <h1 className="main-banner__title">
          Venha conhecer nossas <br /> promoções
        </h1>
        <h2 className="main-banner__subtitle">
          <span>50% Off</span> nos produtos
        </h2>
        <button className="main-banner__button">Ver produto</button>
      </div>
    </section>
  );
};
