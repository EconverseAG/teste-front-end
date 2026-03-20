import { Link } from "react-router-dom";
import styles from "../Mosaic.module.scss";

type MosaicItemProps = {
  image: string;
  text: string;
};

const MosaicItem = ({ image, text }: MosaicItemProps) => {
  return (
    <Link
      to="/"
      className={styles.mosaicItem}
      aria-label={`Ver produtos de ${text}`}
    >
      <div className={styles.mosaicItemImage}>
        <img src={image} alt={text} width={61} height={61} />
      </div>
      <p className={styles.mosaicItemText}>{text}</p>
    </Link>
  );
};

export default MosaicItem;
