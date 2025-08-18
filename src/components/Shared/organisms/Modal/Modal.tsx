import React, { useState } from 'react';
import styles from './Modal.module.scss';
import QuantitySelector from '../../atoms/QuantitySelector';
import type { Product } from '../../../../types';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
    const [quantity, setQuantity] = useState(1);

    if (!isOpen || !product) return null;

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.modal} onClick={handleBackdropClick}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    ✕
                </button>

                <div className={styles.modalBody}>
                    {/* Left Section - Product Image */}
                    <div className={styles.productImage}>
                        <img
                            src={product.photo}
                            alt={product.productName}
                            className={styles.image}
                        />
                    </div>

                    {/* Right Section - Product Information */}
                    <div className={styles.productInfo}>
                        <div className={styles.productInfoContent}>
                            <div className={styles.productTitle}>
                                <h2 className={styles.productName}>{product.productName}</h2>
                                <h3 className={styles.productPrice}>R$ {product.price.toFixed(2).replace('.', ',')}</h3>
                            </div>

                            <div className={styles.descriptionSection}>
                                <p className={styles.description}>{"Many desktop publishing packages and web page editors now many desktop publishing"}</p>
                                <a href="" className={styles.productLink}>{"Veja mais detalhes do produto >"}</a>
                            </div>
                        </div>
                        <div className={styles.actionSection}>
                            <QuantitySelector
                                quantity={quantity}
                                onQuantityChange={handleQuantityChange}
                                minQuantity={1}
                            />
                            <button className={styles.buyButton}>
                                COMPRAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;