import { Link } from "react-router-dom";
import styles from "./MainBanner.module.scss";

const MainBanner = () => {
  return (
    <section className={styles.mainBanner}>
      <div className={styles.mainBannerContent}>
        <h2 className={styles.bannerTitle}>Venha conhecer nossas promoções</h2>
        <h4 className={styles.bannerSubtitle}>
          <strong className={styles.bannerDiscount}>50% Off </strong>nos
          produtos
        </h4>
        <Link
          to="/"
          className={styles.bannerButton}
          aria-label="Ver produtos com 50% de desconto"
        >
          Ver produto
        </Link>
      </div>
    </section>
  );
};

export default MainBanner;
