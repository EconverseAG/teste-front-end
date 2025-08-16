import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import "./Header.scss";

import icon1 from "../../assets/icons/icon-01.png";
import icon2 from "../../assets/icons/icon-02.png";
import icon3 from "../../assets/icons/icon-03.png";
import icon4 from "../../assets/icons/icon-04.png";
import icon5 from "../../assets/icons/icon-05.png";
import icon6 from "../../assets/icons/icon-06.png";
import icon7 from "../../assets/icons/icon-07.png";
import icon8 from "../../assets/icons/icon-08.png";

type Icon = {
    src: string;
    alt: string;
    title: string;
};

type IconTopo = {
    src: string;
    alt: string;
    title: string;
    before: string;
    highlight: string;
    after: string;
};

const icons: Icon[] = [
    { src: icon1, alt: "Ícone 1", title: "Ícone 1" },
    { src: icon2, alt: "Ícone 2", title: "Ícone 2" },
    { src: icon3, alt: "Ícone 3", title: "Ícone 3" },
    { src: icon4, alt: "Ícone 4", title: "Ícone 4" },
];

const iconsTopo: IconTopo[] = [
    {
        src: icon5,
        alt: "Compra 100% segura",
        title: "Compra 100% segura",
        before: "Compra ",
        highlight: "100% segura",
        after: "",
    },
    {
        src: icon6,
        alt: "Frete grátis acima de R$ 200",
        title: "Frete grátis acima de R$ 200",
        before: "",
        highlight: "Frete grátis",
        after: " acima de R$ 200",
    },
    {
        src: icon7,
        alt: "Parcele suas compras",
        title: "Parcele suas compras",
        before: "",
        highlight: "Parcele",
        after: " suas compras",
    },
];

interface Link {
    href: string;
    label: string;
    icon?: string;
}

const links: Link[] = [
    { href: "#", label: "Todas Categorias" },
    { href: "#", label: "Supermercado" },
    { href: "#", label: "Livros" },
    { href: "#", label: "Moda" },
    { href: "#", label: "Lançamentos" },
    { href: "#", label: "Ofertas do dia" },
    { href: "#", label: "Assinatura", icon: icon8 },
];




const Header: React.FC = () => {
    return (
        <header className="header">
            {/* Ícones do topo */}
            <div className="header__itens">
                {iconsTopo.map((icon, index) => (
                    <div key={index} className="header__itens-box">
                        <div className="header__itens__icon">
                            <img src={icon.src} alt={icon.alt} title={icon.title} />
                        </div>
                        <div className="header__itens__text">
                            <p>
                                {icon.before}
                                <span>{icon.highlight}</span>
                                {icon.after}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Pesquisa */}
            <div className="header__content">
                <div className="header__logo">
                    <img src={logo} alt="Logo econverse" title="Logo econverse" />
                </div>
                <div className="header__input">
                    <input
                        type="text"
                        placeholder="O que você está buscando?"
                        aria-label="Pesquisa"
                    />
                    <button type="button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                {/* Icones */}
                <div className="header__icons">
                    {icons.map((icon, index) => (
                        <img
                            key={index}
                            src={icon.src}
                            alt={icon.alt}
                            title={icon.title}
                        />
                    ))}
                </div>
            </div>
            {/* Links navegação */}
            <div className="header__links">
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} title={link.label} className="header__links--box">
                                {link.icon && (
                                    <img
                                        src={link.icon}
                                        alt={`${link.label} ícone`}
                                        className="header__links--icon"
                                    />
                                )}
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
