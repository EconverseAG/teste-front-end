import React from 'react';
import styles from './BrandNavigation.module.scss';
import { PartnerLogo } from '../../atoms/PartnerLogo';

interface Partner {
  id: number;
  name: string;
  logo: string | React.ComponentType<any>;
}

interface BrandNavigationProps {
  title?: string;
  partners: Partner[];
}

const BrandNavigation: React.FC<BrandNavigationProps> = ({
  title = "Navegue por marcas",
  partners
}) => {
  return (
    <section className={styles.brandNavigation}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        
        <div className={styles.brandsContainer}>
          {partners.map((partner) => (
            <PartnerLogo
              key={partner.id}
              logo={partner.logo}
              name={partner.name}
              size="large"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandNavigation;
