import React from 'react';
import styles from './PartnerCard.module.scss';

interface PartnerCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  image?: string;
  onButtonClick?: () => void;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  title = 'Parceiros',
  description = 'Lorem ipsum dolor sit amet, consectetur',
  buttonText = 'CONFIRA',
  image,
  onButtonClick
}) => {
  const backgroundStyle = image ? {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <article className={styles.partnerCard} role="article" aria-label={`Card do parceiro: ${title}`}>
      <div className={styles.backgroundImage} style={backgroundStyle} aria-hidden="true" />
      <div className={styles.imageOverlay} aria-hidden="true" />
      <div className={styles.content}>
        <header>
          <h3 className={styles.title}>{title}</h3>
        </header>
        <p className={styles.description}>{description}</p>
        <footer>
          <button
            className={styles.button}
            onClick={onButtonClick}
            type="button"
            aria-label={`Ver mais sobre ${title}`}
          >
            {buttonText}
          </button>
        </footer>
      </div>
    </article>
  );
};

export default PartnerCard;
