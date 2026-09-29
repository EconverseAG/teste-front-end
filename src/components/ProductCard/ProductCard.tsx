import { Truck } from 'lucide-react';
import type { Product } from '../../types/product';
import { formatCurrency } from '../../utils/format';
import './ProductCard.scss';

interface ProductCardProps {
    product: Product;
    onOpenModal: () => void;
}

export default function ProductCard({ product, onOpenModal }: ProductCardProps) {
    // O JSON traz apenas `price`; os demais valores são derivados para a vitrine.
    const price = Number(product.price) || 0;
    const oldPrice = price * 1.07;
    const installments = Math.max(1, Math.round(price / 10));

    return (
        <article className="product-card">
            <button type="button" className="product-card-hit" onClick={onOpenModal}>
                <div className="product-image">
                    <img src={product.photo} alt={product.productName} loading="lazy" />
                </div>
                <div className="product-info">
                    <h3>{product.productName}</h3>
                    <span className="old-price">{formatCurrency(oldPrice)}</span>
                    <span className="current-price">{formatCurrency(price)}</span>
                    <span className="installments">
                        ou {installments}x de {formatCurrency(price / installments)} sem juros
                    </span>
                    <span className="shipping"><Truck size={13} /> Frete grátis</span>
                </div>
            </button>
            <button type="button" className="buy-button" onClick={onOpenModal}>
                Comprar
            </button>
        </article>
    );
}
