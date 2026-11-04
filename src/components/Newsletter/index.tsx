import './Newsletter.scss';

function Newsletter() {
  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__content">
        <div className="newsletter__info">
          <h2 id="newsletter-title" className="newsletter__title">
            Inscreva-se na nossa newsletter
          </h2>

          <p className="newsletter__description">
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form">
          <div className="newsletter__fields">
            <input
              className="newsletter__input"
              type="text"
              name="name"
              placeholder="Digite seu nome"
              aria-label="Digite seu nome"
              autoComplete="name"
              required
            />

            <input
              className="newsletter__input"
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              aria-label="Digite seu e-mail"
              autoComplete="email"
              required
            />

            <button className="newsletter__button" type="submit">
              Inscrever
            </button>
          </div>

          <label className="newsletter__terms">
            <input type="checkbox" name="terms" required />
            <span>Aceito os termos e condições</span>
          </label>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
