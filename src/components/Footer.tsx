import logo from "../assets/logo.png";
import facebookIcon from "../assets/icons/facebook.png";
import instagramIcon from "../assets/icons/instagram.png";
import linkedinIcon from "../assets/icons/linkedin.png";
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
                  <img src={instagramIcon} alt="" width={20} height={20} />
                </a>
              </li>
              <li>
                <a href="/" aria-label="Facebook da Econverse">
                  <img src={facebookIcon} alt="" width={20} height={20} />
                </a>
              </li>
              <li>
                <a href="/" aria-label="LinkedIn da Econverse">
                  <img src={linkedinIcon} alt="" width={20} height={20} />
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
