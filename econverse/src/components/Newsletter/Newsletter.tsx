import { useState } from 'react';
import type { FormEvent } from 'react';
import './Newsletter.scss';

export function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    //logica de envio aqui
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__content container">
        <div className="newsletter__text">
          <h2 id="newsletter-title" className="newsletter__title">
            Inscreva-se na nossa newsletter
          </h2>
          <p className="newsletter__description">
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <label className="visually-hidden" htmlFor="newsletter-name">
            Nome
          </label>
          <input
            id="newsletter-name"
            className="newsletter__input"
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label className="visually-hidden" htmlFor="newsletter-email">
            E-mail
          </label>
          <input
            id="newsletter-email"
            className="newsletter__input"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <button className="newsletter__submit" type="submit">
            Inscrever
          </button>

          <label className="newsletter__terms">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(event) => setAcceptedTerms(event.target.checked)}
              required
            />
            Aceito os termos e condições
          </label>
        </form>
      </div>
    </section>
  );
}
