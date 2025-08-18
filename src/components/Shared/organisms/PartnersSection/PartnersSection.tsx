import React from 'react';
import styles from './PartnersSection.module.scss';
import PartnerCard from '../../atoms/PartnerCard';
import partnerImage from '../../../../assets/img/image 45.png';

const PartnersSection: React.FC = () => {
  const handlePartnerClick = () => {
    console.log('Parceiro clicado!');
    // Aqui você pode adicionar lógica para navegar para a página do parceiro
  };

  return (
    <section className={styles.partnersSection} aria-label="Seção de parceiros">
      <div className={styles.container}>
        <h2 className="sr-only">Nossos parceiros</h2>
        <div className={styles.partnersGrid} role="list" aria-label="Lista de parceiros">
          <div role="listitem">
            <PartnerCard
              image={partnerImage}
              title="Parceiros"
              description="Lorem ipsum dolor sit amet, consectetur"
              buttonText="CONFIRA"
              onButtonClick={handlePartnerClick}
            />
          </div>
          <div role="listitem">
            <PartnerCard 
              image={partnerImage}
              title="Parceiros"
              description="Lorem ipsum dolor sit amet, consectetur"
              buttonText="CONFIRA"
              onButtonClick={handlePartnerClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
