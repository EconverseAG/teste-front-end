import { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import "./Header.scss";
import BlackFridayPromo from "../BlackFridayPromo/BlackFridayPromo";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setMenuOpen(prev => !prev);
    };

    return (

        <header className="containerHeader">

            <div className="containerTopBar">
                <p>
                    <img src="/iconsHeader/ShieldCheck.png" alt="Icon ShieldCheck" />
                    Compra <span>100% segura</span>
                </p>

                <p>
                    <img src="/iconsHeader/Truck.png" alt="Logo" />
                    <span>Frete grátis</span> acima de R$ 200
                </p>
                <p>
                    <img src="/iconsHeader/CreditCard.png" alt="Icon CreditCard" />
                    <span>Parcele</span> suas compras</p>
            </div>

            <div className="containerMainHeader">
                <div className="logo">
                    <img src="/Logo.png" alt="Logo" />
                </div>

                <div className="containerSearch">
                    <input type="text" placeholder="O que você está buscando?" />
                    <button type="button">
                        <FiSearch size={18} color="#9F9F9F" />
                    </button>
                </div>

                <div className="containerIcons">
                    <img src="/iconsHeader/Group.png" alt="Icon Group" />
                    <img src="/iconsHeader/Heart.png" alt="Icon Heart" />
                    <img src="/iconsHeader/UserCircle.png" alt="Icon UserCircle" />
                    <img src="/iconsHeader/ShoppingCart.png" alt="Icon ShoppingCart" />
                    {menuOpen ? (
                        <FiX className="menu-mobile" onClick={toggleMenu} />
                    ) : (
                        <FiMenu className="menu-mobile" onClick={toggleMenu} />
                    )}
                </div>
            </div>

            <nav className={`categories ${menuOpen ? "active" : ""}`}>
                <a href="#">Todas categorias</a>
                <a href="#">Supermercado</a>
                <a href="#">Livros</a>
                <a href="#">Moda</a>
                <a href="#">Lançamentos</a>
                <a href="#" className="off">Ofertas do dia</a>

                <a href="#">
                    <img src="/iconsHeader/CrownSimple.png" alt="" />
                    Assinatura
                </a>
            </nav>

            <BlackFridayPromo imageSrc="/iconsHeader/BlackFriday/BlackFriday.jpg" />

        </header>
    );
}