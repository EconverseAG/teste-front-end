import Modal from 'react-modal';

import styles from './ProductCard.module.css'
import { useState } from 'react';
import ProductModal from '../ProductModal/ProductModal';

Modal.setAppElement('#root');

const ProductCard = ({ product }) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const changeModal = () => {
        setIsOpen(!modalIsOpen)
    }

    return (
        <div className={styles.container}>
            <img src={product.photo} alt="" />
            <h2>{product.productName}</h2>
            <p className={styles.price_line}>{product.price}</p>
            <p className={styles.price_common}>{product.price}</p>
            <p className={styles.price_buy}>ou 2x de R$ 49,95 sem juros</p>
            <p className={styles.free}>Frete grátis</p>
            <button className={styles.btn} onClick={changeModal}>Comprar</button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={changeModal}
                contentLabel="Modal de exemplo"
                className={styles.modal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0 ,0, 0.8)',
                    },
                    content: {
                        background: 'white',
                        width: '729px',
                        margin: 'auto',
                    }
                }}
            >
                <ProductModal product={product} changeModal={changeModal} />
            </Modal>
        </div>
    )
}

export default ProductCard