import logoEconverse from "../../assets/Logo.svg";
import instagramIcon from "../../assets/icons/InstagramIcon.svg";
import facebookIcon from "../../assets/icons/FacebookIcon.svg";
import linkedinIcon from "../../assets/icons/LinkedinIcon.svg";
import "./style.scss";

interface FooterSection {
  title: string;
  links: string[];
}

export const Footer = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Institucional",
      links: ["Sobre Nós", "Movimento", "Trabalhe conosco"],
    },
    {
      title: "Ajuda",
      links: ["Suporte", "Fale Conosco", "Perguntas Frequentes"],
    },
    {
      title: "Termos",
      links: [
        "Termos e Condições",
        "Política de Privacidade",
        "Troca e Devolução",
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <img
            src={logoEconverse}
            alt="Econverse Logo"
            className="footer__logo"
          />
          <p className="footer__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="footer__socials">
            <a href="#">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="#">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#">
              <img src={linkedinIcon} alt="Linkedin" />
            </a>
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__links-container">
          {footerSections.map((section) => (
            <div key={section.title} className="footer__column">
              <h3 className="footer__column-title">{section.title}</h3>
              <ul className="footer__list">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__copyright">
        <div className="footer__copyright-container">
          <p className="footer__copyright-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </footer>
  );
};
