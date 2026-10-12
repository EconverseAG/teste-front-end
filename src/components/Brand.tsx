import logo from "../assets/logo.png";
import "../style/Brand.scss";

function Brand() {
  return (
    <section className="brand" aria-labelledby="brand-title">
      <h2 className="brand__title" id="brand-title">
        Navegue por marcas
      </h2>
      <ul className="brand__list">
        {[1, 2, 3, 4, 5].map((brand) => (
          <li key={brand} className="brand__item">
            <img src={logo} alt="Econverse" className="brand__image" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Brand;
