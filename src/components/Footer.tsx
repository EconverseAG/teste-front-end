import logo from "../assets/logo.png";
import "../style/Footer.scss";

const footerGroups = [
  {
    title: "Institucional",
    links: ["Sobre nós", "Movimento", "Trabalhe conosco"],
  },
  {
    title: "Ajuda",
    links: ["Suporte", "Fale conosco", "Perguntas frequentes"],
  },
  {
    title: "Termos",
    links: [
      "Termos e condições",
      "Política de privacidade",
      "Troca e devolução",
    ],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <section
        className="footer__newsletter"
        aria-labelledby="newsletter-title"
      >
        <div className="footer__newsletter-inner">
          <div className="footer__newsletter-copy">
            <h2 className="footer__newsletter-title" id="newsletter-title">
              Inscreva-se na nossa newsletter
            </h2>
            <p>
              Assine a nossa newsletter e receba as novidades e conteúdos
              exclusivos da Econverse.
            </p>
          </div>

          <form
            className="footer__newsletter-form"
            action="/newsletter"
            method="post"
          >
            <div className="footer__newsletter-fields">
              <label className="sr-only" htmlFor="newsletter-name">
                Seu nome
              </label>
              <input
                id="newsletter-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Digite seu nome"
              />
              <label className="sr-only" htmlFor="newsletter-email">
                Seu e-mail
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Digite seu e-mail"
                required
              />
              <button type="submit">Inscrever</button>
            </div>
            <div className="footer__newsletter-consent">
              <input
                id="newsletter-terms"
                name="terms"
                type="checkbox"
                value="accepted"
                required
              />
              <label htmlFor="newsletter-terms">
                Aceito os <a href="/">termos e condições</a>
              </label>
            </div>
          </form>
        </div>
      </section>

      <div className="footer__main">
        <div className="footer__main-inner">
          <section className="footer__brand" aria-label="Sobre a Econverse">
            <a
              className="footer__logo-link"
              href="/"
              aria-label="Econverse - página inicial"
            >
              <img
                className="footer__logo"
                src={logo}
                alt="Econverse"
                width="140"
                height="40"
              />
            </a>
            <p className="footer__description">
              Encontre ofertas e produtos selecionados para facilitar o seu dia
              a dia.
            </p>
            <ul className="footer__social-list" aria-label="Redes sociais">
              <li>
                <a href="/" aria-label="Instagram da Econverse">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.8"
                      r="0.8"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/" aria-label="Facebook da Econverse">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/" aria-label="LinkedIn da Econverse">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.2 8.3a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.7 9.7h3v10.1h-3V9.7Zm4.9 0h2.9v1.4h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.6v5.7h-3v-5c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6v5.1h-3V9.7Zm12.5 10.1h-3V9.7h3v10.1Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </section>

          <nav className="footer__navigation" aria-label="Links do rodapé">
            {footerGroups.map(({ title, links }) => (
              <section className="footer__link-group" key={title}>
                <h2>{title}</h2>
                <ul>
                  {links.map((link) => (
                    <li key={link}>
                      <a href="/">{link}</a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}

export default Footer;
