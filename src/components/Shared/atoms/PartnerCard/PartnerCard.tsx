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
    <div className={styles.partnerCard}>
      <div className={styles.backgroundImage} style={backgroundStyle} />
      <div className={styles.imageOverlay} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <button
          className={styles.button}
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PartnerCard;
