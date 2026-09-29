import { useState } from 'react';
import './Newsletter.scss';

export default function Newsletter() {
  const [inscrito, setInscrito] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setInscrito(true);
  }

  return (
    <section className="newsletter-box" aria-labelledby="newsletter-titulo">
      <div className="container newsletter-content">
        <div className="newsletter-text">
          <h2 id="newsletter-titulo">Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>

        {inscrito ? (
          <p className="newsletter-success" role="status">
            Inscrição confirmada! Acompanhe o nosso e-mail.
          </p>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="newsletter-field">
              <label className="sr-only" htmlFor="newsletter-nome">
                Digite seu nome
              </label>
              <input id="newsletter-nome" name="nome" type="text" placeholder="Digite seu nome" />

              <label className="newsletter-checkbox">
                <input type="checkbox" name="termos" required />
                <span className="checkbox-box" aria-hidden="true"></span>
                <span className="checkbox-text">Aceito os termos e condições</span>
              </label>
            </div>

            <label className="sr-only" htmlFor="newsletter-email">
              Digite seu e-mail
            </label>
            <input id="newsletter-email" name="email" type="email" placeholder="Digite seu e-mail" required />

            <button type="submit">Inscrever</button>
          </form>
        )}
      </div>
    </section>
  );
}
