import Partner from "./Partner";
import styles from "./Partners.module.scss";

import ImagePartner from "../../../assets/Partners.png"

const Partners = () => {
  return (
    <section className={styles.partners}>
      <Partner link="/" image={ImagePartner}>
        Lorem ipsum dolor sit amet, consectetur
      </Partner>
      <Partner link="/" image={ImagePartner}>
        Lorem ipsum dolor sit amet, consectetur
      </Partner>
    </section>
  );
};

export default Partners;
