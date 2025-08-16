import "./IconesHome.scss";

import icon1 from "../../assets/icons/icon-tecnologia.png";
import icon2 from "../../assets/icons/icon-supermercados.png";
import icon3 from "../../assets/icons/icon-whiskey.png";
import icon4 from "../../assets/icons/icon-ferramentas.png";
import icon5 from "../../assets/icons/icon-cuidados-saude.png";
import icon6 from "../../assets/icons/icon-corrida.png";
import icon7 from "../../assets/icons/icon-moda.png";

type IconeHome = {
    src: string;
    alt: string;
    title: string;
};

const iconesHome: IconeHome[] = [
    { src: icon1, alt: "Tecnologia", title: "Tecnologia" },
    { src: icon2, alt: "Supermercado", title: "Supermercado" },
    { src: icon3, alt: "Bebidas", title: "Bebidas" },
    { src: icon4, alt: "Ferramentas", title: "Ferramentas" },
    { src: icon5, alt: "Saúde", title: "Saúde" },
    { src: icon6, alt: "Esportes e Fitness", title: "Esportes e Fitness" },
    { src: icon7, alt: "Moda", title: "Moda" },
];

const IconesHome = () => {
    return (
        <div className="icones-home">
            {iconesHome.map((icone, index) => (
                <div key={index} className="icones-home__item">
                    <div className="icones-home__item-img">
                        <img src={icone.src} alt={icone.alt} title={icone.title} />
                    </div>
                    <span>{icone.title}</span>
                </div>
            ))}
        </div>
    );
};

export default IconesHome;
