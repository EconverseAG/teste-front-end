import React, { useState } from "react";
import Popup from "../popup";
import type { Product } from "../../interfaces/Product";
import LoadingComponent from "../loading";
import ErrorComponent from "../error";
import useProducts from "../../hooks/useProduct";
import './index.scss';

const Carousel: React.FC = () => {
    const { products, loading, error } = useProducts();
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openPopup = (product: Product) => {
        setSelectedProduct(product);
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
        setSelectedProduct(null);
    };

    const moveSlide = (direction: number) => {
        const newIndex = currentIndex + direction;
        if (newIndex < 0) {
            setCurrentIndex(products.length - 1); // Volta para o último produto
        } else if (newIndex >= products.length) {
            setCurrentIndex(0); // Volta para o primeiro produto
        } else {
            setCurrentIndex(newIndex);
        }
    };

    if (loading) return <LoadingComponent />;
    if (error) return <ErrorComponent message={error} />;

    // Calcular os produtos a serem exibidos
    const visibleProducts = products.slice(currentIndex, currentIndex + 4);

    return (
        <section className="container-carousel">
            <div className="produtos-main">
                <button className="pass-left" onClick={() => moveSlide(-1)}>
                    &#10094;
                </button>
                <div className="product-list">
                    {visibleProducts.map((product) => (
                        <div
                            key={product.id}
                            className="product-item"
                            onClick={() => openPopup(product)}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => e.key === 'Enter' && openPopup(product)}
                        >
                            <img src={product.photo} alt={product.productName} />
                            <h2>{product.productName}</h2>
                            <p>R${product.price}</p>
                            <button>COMPRAR</button>
                        </div>
                    ))}
                </div>
                <button className="pass-right" onClick={() => moveSlide(1)}>
                    &#10095;
                </button>
            </div>

            {isOpen && selectedProduct && (
                <div className="layout-popup">
                    <Popup product={selectedProduct} onClose={closePopup} />
                </div>
            )}
        </section>
    );
};

export default Carousel;