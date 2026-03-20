import styles from "./NavigateByBrands.module.scss";

import ImageBubble from "../../../assets/Bubbles.png";

const ITEMS_BUBBLE = [
  {
    image: ImageBubble,
    alt: "Imagem da Bolha",
  },
  {
    image: ImageBubble,
    alt: "Imagem da Bolha",
  },
  {
    image: ImageBubble,
    alt: "Imagem da Bolha",
  },
  {
    image: ImageBubble,
    alt: "Imagem da Bolha",
  },
  {
    image: ImageBubble,
    alt: "Imagem da Bolha",
  },
];

const NavigateByBrands = () => {
  return (
    <section className={styles.navigateByBrands}>
      <h3 className={styles.navigateByBrandsTitle}>Navegue por marcas</h3>
      <div className={styles.navigateByBrandsItems}>
        {ITEMS_BUBBLE.map((item, index) => (
          <div key={index} className={styles.navigateByBrandsItem}>
            <img
              src={item.image}
              alt={item.alt}
              title={item.alt}
              width={117}
              height={34.76}
              loading="lazy"
            />
            </div>
        ))}
      </div>
    </section>
  );
};

export default NavigateByBrands;
