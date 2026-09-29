import { useId, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../ProductCard/ProductCard';
import type { Product } from '../../types/product';
import './ProductCarousel.scss';

interface ProductCarouselProps {
    products: Product[];
    onOpenModal: (product: Product) => void;
    titulo: string;
}

const PER_PAGE = 4;

export default function ProductCarousel({ products, onOpenModal, titulo }: ProductCarouselProps) {
    const [page, setPage] = useState(0);
    const baseId = useId();

    const pages: Product[][] = [];
    for (let i = 0; i < products.length; i += PER_PAGE) {
        pages.push(products.slice(i, i + PER_PAGE));
    }

    const totalPages = pages.length;
    if (totalPages === 0) return null;

    const irPara = (nova: number) => setPage(Math.min(Math.max(nova, 0), totalPages - 1));

    return (
        <div
            className="product-carousel"
            role="group"
            aria-roledescription="carrossel"
            aria-label={titulo}
        >
            <div
                className="carousel-viewport"
                id={`${baseId}-viewport`}
                aria-live="polite"
            >
                <div className="carousel-track" style={{ transform: `translateX(-${page * 100}%)` }}>
                    {pages.map((pageProducts, pageIndex) => (
                        <div
                            className={`carousel-page${pageIndex === page ? ' is-active' : ''}`}
                            key={pageIndex}
                            role="group"
                            aria-roledescription="página"
                            aria-label={`${pageIndex + 1} de ${totalPages}`}
                            aria-hidden={pageIndex !== page}
                        >
                            {pageProducts.map((product, index) => (
                                <ProductCard
                                    key={`${pageIndex}-${index}`}
                                    product={product}
                                    onOpenModal={() => onOpenModal(product)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <button
                type="button"
                className="carousel-arrow carousel-prev"
                onClick={() => irPara(page - 1)}
                disabled={page === 0}
                aria-label="Página anterior de produtos"
                aria-controls={`${baseId}-viewport`}
            >
                <ChevronLeft size={24} />
            </button>

            <button
                type="button"
                className="carousel-arrow carousel-next"
                onClick={() => irPara(page + 1)}
                disabled={page === totalPages - 1}
                aria-label="Próxima página de produtos"
                aria-controls={`${baseId}-viewport`}
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
}
