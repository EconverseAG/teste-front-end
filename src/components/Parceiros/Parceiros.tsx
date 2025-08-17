import './Parceiros.scss';
import parceiro from "../../assets/parceiros/img-parceiros.webp";

interface Parceiro {
    id: number;
    titulo: string;
    descricao: string;
    imagem: string;
    link: string;
}

const parceiros: Parceiro[] = [
    {
        id: 1,
        titulo: "Parceiros",
        descricao: "Lorem ipsum dolor sit amet, consectetur",
        imagem: parceiro,
        link: "#",
    },
    {
        id: 2,
        titulo: "Parceiros",
        descricao: "Lorem ipsum dolor sit amet, consectetur",
        imagem: parceiro,
        link: "#",
    },
];

const Parceiros = () => {
    return (
        <div className="parceiros-home">
            {parceiros.map((item) => (
                <div
                    key={item.id}
                    className="parceiros-home__image"
                    style={{ backgroundImage: `url(${item.imagem})` }}
                >
                    <div className="parceiros-home__content">
                        <h2>{item.titulo}</h2>
                        <p>{item.descricao}</p>
                        <a
                            href={item.link}
                            className="btn--primary"
                            title={`Confira nossos ${item.titulo.toLowerCase()}`}
                        >
                            Confira
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Parceiros;
