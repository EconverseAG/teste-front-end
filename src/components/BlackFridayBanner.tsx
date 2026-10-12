import blackFridayImage from "../assets/banners/blackfriday.png";
import gradientImage from "../assets/banners/degrade.png";
import "../style/BlackFridayBanner.scss";

function BlackFridayBanner() {
  return (
    <section
      className="black-friday-banner"
      aria-labelledby="black-friday-banner-title"
    >
      <img
        className="black-friday-banner__photo"
        src={blackFridayImage}
        alt=""
        aria-hidden="true"
      />
      <img
        className="black-friday-banner__gradient"
        src={gradientImage}
        alt=""
        aria-hidden="true"
      />
      <div className="black-friday-banner__content">
        <h1 id="black-friday-banner-title">
          Venha conhecer nossas
          <br />
          promoções
        </h1>
        <p>
          <strong>50% Off</strong> nos produtos
        </p>
        <a className="black-friday-banner__button" href="/ofertas">
          Ver produto
        </a>
      </div>
    </section>
  );
}

export default BlackFridayBanner;
