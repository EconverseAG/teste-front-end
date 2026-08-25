import { useState } from 'react'
import styles from './ProductsCarroussel.module.css'
import { useFetchData } from '../../../hooks/useFetchData'
import ProductCard from '../../../components/ProductCard/ProductCard'

const ProductsCarroussel = () => {

    const { products } = useFetchData()
    const [category, setCategory] = useState('Ver todos')

    const items = [
        { name: 'Celular' },
        { name: 'Acessórios' },
        { name: 'Tablets' },
        { name: 'Notebooks' },
        { name: 'Tvs' },
        { name: 'Ver todos' },
    ]

    return (
        <section className={styles.container}>
            <nav>
                <ul>
                    {
                        items.map((item, index) => (
                            <li key={index} onClick={() => setCategory(item.name)}>
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <main className={styles.main_products}>
                <img className={styles.img_arrow} src="src/assets/carroussel/left.png" alt="" />
                <div className={styles.products}>
                    {products && products.length > 0 ? products.map((product, index) => (
                        <>
                            {index < 4 ? <ProductCard product={product} /> : ''}
                        </>
                    )) : ''}
                </div>
                <img className={styles.img_arrow} src="src/assets/carroussel/right.png"  alt="" />

            </main>
        </section>
    )
}

export default ProductsCarroussel