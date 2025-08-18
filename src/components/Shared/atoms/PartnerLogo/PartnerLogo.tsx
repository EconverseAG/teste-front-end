import React from 'react';
import styles from './PartnerLogo.module.scss';

interface PartnerLogoProps {
  logo: string | React.ComponentType<any>;
  name: string;
  size?: 'small' | 'medium' | 'large';
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ 
  logo, 
  name, 
  size = 'medium' 
}) => {
  // Se o logo for uma string (URL), renderiza uma imagem
  if (typeof logo === 'string') {
    return (
      <div className={`${styles.partnerLogo} ${styles[size]}`}>
        <img 
          src={logo} 
          alt={`Logo ${name}`}
          className={styles.logoImage}
        />
      </div>
    );
  }

  // Se o logo for um componente React, renderiza o componente
  const LogoComponent = logo;
  return (
    <div className={`${styles.partnerLogo} ${styles[size]}`}>
      <LogoComponent className={styles.logoImage} />
    </div>
  );
};

export default PartnerLogo;
