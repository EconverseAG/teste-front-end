import { Link } from "react-router-dom";
import styles from "../Partners.module.scss";

type PartnerProps = {
  link: string;
  image: string;
  title?: string;
  children: string;
};

const Partner = ({
  link,
  image,
  title = "Parceiros",
  children,
}: PartnerProps) => {
  return (
    <div
      className={styles.partner}
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent, #000), url(${image})`,
      }}
    >
      <h4 className={styles.partnerTitle}>{title}</h4>
      <p className={styles.partnerText}>{children}</p>
      <Link to={link} className={styles.partnerButton}>
        CONFIRA
      </Link>
    </div>
  );
};

export default Partner;
