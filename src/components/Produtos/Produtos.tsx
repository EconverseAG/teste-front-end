import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Produtos.scss";
import "@splidejs/splide/dist/css/splide.min.css";

interface Link {
    href: string;
    label: string;
    icon?: string;
}

interface Produto {
    id: number;
    productName: string;
    descriptionShort: string;
    price: number;
    photo: string;
}

interface ApiResponse {
    success: boolean;
    products: Produto[];
}

const links: Link[] = [
    { href: "#", label: "celular" },
    { href: "#", label: "acessórios" },
    { href: "#", label: "tablets" },
    { href: "#", label: "NOTEBOOKS" },
    { href: "#", label: "TVs" },
    { href: "#", label: "Ver todos" },
];

interface ProdutosProps {
    mostrarLinks?: boolean;
}

export const Produtos = ({ mostrarLinks = false }: ProdutosProps) => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
    const [quantidade, setQuantidade] = useState(1);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const proxyUrl = "https://corsproxy.io/?";
                const apiUrl = encodeURIComponent(
                    "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
                );

                const response = await fetch(proxyUrl + apiUrl, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                    },
                });

                if (!response.ok) {
                    throw new Error(`Erro HTTP: ${response.status}`);
                }

                const data: ApiResponse = await response.json();

                if (!data.success || !data.products) {
                    throw new Error("Estrutura da API inválida");
                }

                const produtosFormatados = data.products.map((produto, index) => ({
                    id: index + 1,
                    productName: produto.productName || "Produto sem nome",
                    descriptionShort: produto.descriptionShort || "Descrição não disponível",
                    price: produto.price ? Number(produto.price) : 0,
                    photo: produto.photo || "https://via.placeholder.com/300x300?text=Produto",
                }));

                setProdutos(produtosFormatados);
            } catch (err) {
                console.error("Falha ao carregar produtos:", err);
                setError("Não foi possível carregar os produtos. Tente recarregar a página.");
            } finally {
                setLoading(false);
            }
        };

        fetchProdutos();
    }, []);

    const abrirModal = (produto: Produto) => {
        setProdutoSelecionado(produto);
        setQuantidade(1);
    };

    const fecharModal = () => {
        setProdutoSelecionado(null);
    };

    const aumentarQuantidade = () => setQuantidade((prev) => prev + 1);
    const diminuirQuantidade = () => setQuantidade((prev) => (prev > 1 ? prev - 1 : 1));

    const formatarPreco = (preco: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(preco / 100);
    };

    if (loading) {
        return (
            <section className="produtos-home">
                <div className="produtos-home__title">
                    <span></span>
                    <h2>Produtos relacionados</h2>
                    <span></span>
                </div>
                <div className="loading-container">
                    <p>Carregando produtos...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="produtos-home">
                <div className="produtos-home__title">
                    <span></span>
                    <h2>Produtos relacionados</h2>
                    <span></span>
                </div>
                <div className="error-container">
                    <p>{error}</p>
                    <button onClick={() => window.location.reload()} className="btn--secondary">
                        Recarregar
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="produtos-home">
            <div className="produtos-home__title">
                <span></span>
                <h2>Produtos relacionados</h2>
                <span></span>
            </div>

            {mostrarLinks ? (
                <div className="produtos-home__link">
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} title={link.label}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="produtos-home__link">
                    <a className="produtos__item" href="#" title="Ver todos os produtos">
                        Ver todos
                    </a>
                </div>
            )}

            <div className="produtos-home__carousel">
                <Splide
                    options={{
                        perPage: 4,
                        gap: "10px",
                        breakpoints: {
                            1200: { perPage: 3 },
                            900: { perPage: 2 },
                            600: { perPage: 1 },
                        },
                        pagination: false,
                        arrows: true,
                        drag: "free",
                    }}
                >
                    {produtos.map((produto) => (
                        <SplideSlide key={produto.id}>
                            <div className="card-produto">
                                <div className="card-produto__img">
                                    <img
                                        src={produto.photo}
                                        alt={produto.productName}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src =
                                                "https://via.placeholder.com/300x300?text=Produto";
                                        }}
                                    />
                                </div>
                                <div className="card-produto__info">
                                    <h3>{produto.productName}</h3>
                                    <p>{produto.descriptionShort}</p>
                                    <span>{formatarPreco(produto.price)}</span>
                                    <button
                                        className="btn--secondary"
                                        onClick={() => abrirModal(produto)}
                                    >
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>

            {produtoSelecionado && (
                <div className="modal">
                    <div className="modal__overlay" onClick={fecharModal}></div>
                    <div className="modal__content">
                        <button
                            className="modal__close"
                            onClick={fecharModal}
                            aria-label="Fechar modal"
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <div className="modal__grid">
                            <div className="modal__image">
                                <img
                                    src={produtoSelecionado.photo}
                                    alt={produtoSelecionado.productName}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src =
                                            "https://via.placeholder.com/500x500?text=Produto";
                                    }}
                                />
                            </div>
                            <div className="modal__info">
                                <h2>{produtoSelecionado.productName}</h2>
                                <p>{produtoSelecionado.descriptionShort}</p>
                                <span>{formatarPreco(produtoSelecionado.price)}</span>
                                <div className="modal__btns">
                                    <div className="quantidade">
                                        <button
                                            onClick={diminuirQuantidade}
                                            aria-label="Diminuir quantidade"
                                        >
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <span>{quantidade}</span>
                                        <button
                                            onClick={aumentarQuantidade}
                                            aria-label="Aumentar quantidade"
                                        >
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                    <button
                                        className="btn--primary"
                                        title={`Comprar ${produtoSelecionado.productName} (${quantidade} un.)`}
                                    >
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};