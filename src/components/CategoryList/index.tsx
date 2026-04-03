import techIcon from "../../assets/icons/TechIcon.svg";
import supermarketIcon from "../../assets/icons/SupermarketIcon.svg";
import drinksIcon from "../../assets/icons/DrinksIcon.svg";
import toolsIcon from "../../assets/icons/ToolsIcon.svg";
import healthIcon from "../../assets/icons/HealthIcon.svg";
import fitinessIcon from "../../assets/icons/FitnessIcon.svg";
import fashionIcon from "../../assets/icons/FashionIcon.svg";
import "./style.scss";

type CategoryItem = {
  name: string;
  icon: string;
  active?: boolean;
};

const categories: CategoryItem[] = [
  { name: "Tecnologia", icon: techIcon, active: true },
  { name: "Supermercado", icon: supermarketIcon },
  { name: "Bebidas", icon: drinksIcon },
  { name: "Ferramentas", icon: toolsIcon },
  { name: "Saúde", icon: healthIcon },
  { name: "Esporte e Fitness", icon: fitinessIcon },
  { name: "Moda", icon: fashionIcon },
];

export const CategoryList = () => {
  return (
    <section className="category-list">
      <div className="category-list__container">
        {categories.map((category) => (
          <div key={category.name} className="category-list__item">
            <div
              className={`category-list__card ${category.active ? "category-list__card--active" : ""}`}
            >
              <img src={category.icon} alt={category.name} />
            </div>
            <p className={category.active ? "active-text" : ""}>
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
