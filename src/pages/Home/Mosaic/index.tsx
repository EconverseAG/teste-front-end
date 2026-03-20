import styles from "./Mosaic.module.scss";

import Desktop from "@/assets/Desktop.png";
import Market from "@/assets/Market.png";
import Dress from "@/assets/Dress.png";
import Drink from "@/assets/Drink.png";
import Heart from "@/assets/Heart.png";
import Race from "@/assets/Race.png";
import Tools from "@/assets/Tools.png";

import MosaicItem from "./MosaicItem";

const ITEMS_MOSAIC = [
  {
    image: Desktop,
    text: "Tecnologia",
  },
  {
    image: Market,
    text: "Supermercado",
  },
  {
    image: Drink,
    text: "Bebidas",
  },
  {
    image: Tools,
    text: "Ferramentas",
  },
  {
    image: Heart,
    text: "Saúde",
  },
  {
    image: Race,
    text: "Esportes e Fitness",
  },
  {
    image: Dress,
    text: "Moda",
  },
];

const Mosaic = () => {
  return (
    <section className={styles.mosaic}>
      {ITEMS_MOSAIC.map((item, index) => (
        <MosaicItem key={index} image={item.image} text={item.text} />
      ))}
    </section>
  );
};

export default Mosaic;
