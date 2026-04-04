import iconShield from "../../assets/icons/ShieldCheck.svg";
import iconTruck from "../../assets/icons/Truck.svg";
import iconCreditCard from "../../assets/icons/CreditCard.svg";
import logoEconverse from "../../assets/Logo.svg";
import iconSearch from "../../assets/icons/SearchIcon.svg";
import iconPackage from "../../assets/icons/PackageIcon.svg";
import iconHeart from "../../assets/icons/HeartIcon.svg";
import iconUserCircle from "../../assets/icons/UserCircleIcon.svg";
import iconShoppingCart from "../../assets/icons/ShoppingCartIcon.svg";
import "./style.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__top-bar">
        <div className="header__container">
          <div className="header__top-item">
            <img src={iconShield} alt="Segurança" />
            <p>
              Compra <span>100% segura</span>
            </p>
          </div>
          <div className="header__top-item">
            <img src={iconTruck} alt="Frete" />
            <p>
              <span>Frete grátis</span> acima de R$ 200
            </p>
          </div>
          <div className="header__top-item">
            <img src={iconCreditCard} alt="Parcelas" />
            <p>
              <span>Parcele</span> suas compras
            </p>
          </div>
        </div>
      </div>

      <div className="header__main">
        <div className="header__container">
          <div className="header__logo">
            <img src={logoEconverse} alt="Econverse Logo" />
          </div>

          <div className="header__search">
            <input type="text" placeholder="O que você está buscando?" />
            <img
              src={iconSearch}
              className="header__search-icon"
              alt="Buscar"
            />
          </div>

          <div className="header__actions">
            <img src={iconPackage} alt="Pedidos" />
            <img src={iconHeart} alt="Favoritos" />
            <img src={iconUserCircle} alt="Minha Conta" />
            <img src={iconShoppingCart} alt="Carrinho" />
          </div>
        </div>
      </div>
    </header>
  );
};
