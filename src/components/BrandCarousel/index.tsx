import logoEconverse from "../../assets/icons/Logo.svg";
import "./style.scss";

interface BrandCardProps {
  logo: string;
}

const BrandCard = ({ logo }: BrandCardProps) => (
  <div className="brand-carousel__card">
    <img src={logo} alt="Logo da Marca" className="brand-carousel__logo" />
  </div>
);

export const BrandCarousel = () => {
  const brands = [
    { id: 1, logo: logoEconverse },
    { id: 2, logo: logoEconverse },
    { id: 3, logo: logoEconverse },
    { id: 4, logo: logoEconverse },
  ];

  return (
    <section className="brand-carousel">
      <h2 className="brand-carousel__title">Navegue por marcas</h2>

      <div className="brand-carousel__container">
        {brands.map((brand) => (
          <BrandCard key={brand.id} logo={brand.logo} />
        ))}
      </div>
    </section>
  );
};
