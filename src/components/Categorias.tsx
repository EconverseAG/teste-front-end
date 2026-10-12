import cateTech from "../assets/categorias/CateTech.png";
import cateMarket from "../assets/categorias/CateMarket.png";
import cateDrinks from "../assets/categorias/CateDrinks.png";
import cateTools from "../assets/categorias/CateTools.png";
import cateHealth from "../assets/categorias/CateHealth.png";
import cateSports from "../assets/categorias/CateSports.png";
import cateFashion from "../assets/categorias/CateFashion.png";
import "../style/Categorias.scss";

function Categorias() {
  const categorias = [
    {
      name: "Tecnologia",
      img: cateTech,
      link: "./",
    },
    {
      name: "Supermercado",
      img: cateMarket,
      link: "./",
    },
    {
      name: "Bebidas",
      img: cateDrinks,
      link: "./",
    },
    {
      name: "Ferramentas",
      img: cateTools,
      link: "./",
    },
    {
      name: "Saúde",
      img: cateHealth,
      link: "./",
    },
    {
      name: "Esportes e Fitness",
      img: cateSports,
      link: "./",
    },
    {
      name: "Moda",
      img: cateFashion,
      link: "./",
    },
  ];

  return (
    <div
      className="categorias"
      role="navigation"
      aria-label="Categorias de produtos"
    >
      <h2 className="categorias__title">Categorias</h2>
      <ul className="categorias__list">
        {categorias.map((categoria) => (
          <li key={categoria.name} className="categorias__item">
            <a href={categoria.link} className="categorias__link">
              <img src={categoria.img} alt="" />
              {categoria.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categorias;
