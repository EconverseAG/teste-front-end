import { useState } from 'react'
import styles from './ProductModal.module.css'

const ProductModal = ({ product, changeModal }) => {

    const [counter, setCounter] = useState(1)
    return (
        <section className={styles.container}>
            <button className={styles.close} onClick={changeModal}>x</button>
            <div>
                <img src={product.photo} alt="" />
            </div>
            <div>
                <h2>{product.productName}</h2>
                <p className={styles.price}>R$ {product.price}</p>
                <p className={styles.description}>{product.descriptionShort}</p>
                <p className={styles.details}>Veja mais detalhes do produto &#62;</p>
                <div className={styles.btn_section}>
                    <button onClick={() => setCounter(counter - 1)}>-</button>
                    <button>{counter}</button>
                    <button onClick={() => setCounter(counter + 1)}>+</button>
                </div>
                <button className={styles.btn} onClick={changeModal}>Comprar</button>
            </div>
        </section>
    )
}

export default ProductModal