import React from 'react';
import styles from './PartnersSection.module.scss';
import PartnerCard from '../../atoms/PartnerCard';
import partnerImage from '../../../../assets/img/image 45.png';

const PartnersSection: React.FC = () => {
  const handlePartnerClick = () => {
    console.log('Parceiro clicado!');
  };

  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={styles.partnersGrid}>
          <PartnerCard
            image={partnerImage}
            title="Parceiros"
            description="Lorem ipsum dolor sit amet, consectetur"
            buttonText="CONFIRA"
            onButtonClick={handlePartnerClick}
          />
          <PartnerCard 
            image={partnerImage}
            title="Parceiros"
            description="Lorem ipsum dolor sit amet, consectetur"
            buttonText="CONFIRA"
            onButtonClick={handlePartnerClick}
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
