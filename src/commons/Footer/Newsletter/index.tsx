import styles from "../Footer.module.scss";

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletterContent}>
        <div className={styles.titleContainer}>
          <h4 className={styles.titleNewsletter}>
            Inscreva-se na nossa newsletter
          </h4>
          <p className={styles.descriptionNewsletter}>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>
        <form className={styles.form}>
          <div className={styles.inputs}>
            <input id="name" type="text" placeholder="Digite seu nome" required />
            <input id="email" type="email" placeholder="Digite seu e-mail" required />
            <button type="submit">INSCREVER-SE</button>
          </div>

          <div className={styles.checkbox}>
            <input id="terms" type="checkbox" required />
            <label htmlFor="terms">Aceito os termos e condições</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
