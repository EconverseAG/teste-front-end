import './index.scss';
import { useState } from 'react';
import useProducts from '../../hooks/useProduct';
import type { Product } from '../../interfaces/Product';

const AllProducts: React.FC = () => {
    const { products, loading, error } = useProducts();
    const [showAll, setShowAll] = useState<boolean>(false);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    const displayedProducts: Product[] = showAll ? products : products.slice(0, 4);

    return (
        <section className="container-all-products">
            <div className="title-container-all">
                <div className="layout-products">
                    <span></span>
                    <h1>Produtos relacionados</h1>
                    <span></span>
                </div>
                <button onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'Ver menos' : 'Ver todos'}
                </button>
            </div>
            <article className='all-products-main'>
                {displayedProducts.map(product => (
                    <div key={product.id} className='item-all'>
                        <img src={product.photo} alt={product.productName} />
                        <h2>{product.productName}</h2>
                        <p>R$ {product.price.toFixed(2)}</p>
                    </div>
                ))}
            </article>
        </section>
    );
}

export default AllProducts;