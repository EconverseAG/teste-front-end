import { lazy } from "react";
import styles from "./Footer.module.scss";

const Newsletter = lazy(() => import("./Newsletter"));
const FooterContent = lazy(() => import("./FooterContent"));

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Newsletter />
      <FooterContent />
      <div className={styles.footerCopyright}>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
    </footer>
  );
};

export default Footer;
