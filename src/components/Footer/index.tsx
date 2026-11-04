import { Icon } from '../Icon';
import './Footer.scss';
import logo from '@/assets/images/logo.svg';

const footerGroups = [
  {
    id: 1,
    title: 'Institucional',
    links: [
      { label: 'Sobre Nós', href: '#' },
      { label: 'Movimento', href: '#' },
      { label: 'Trabalhe conosco', href: '#' },
    ],
  },
  {
    id: 2,
    title: 'Ajuda',
    links: [
      { label: 'Suporte', href: '#' },
      { label: 'Fale Conosco', href: '#' },
      { label: 'Perguntas Frequentes', href: '#' },
    ],
  },
  {
    id: 3,
    title: 'Termos',
    links: [
      { label: 'Termos e Condições', href: '#' },
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Troca e Devolução', href: '#' },
    ],
  },
];

const socialLinks = [
  {
    id: 1,
    name: 'instagram',
    href: 'https://www.instagram.com/econverse.ag',
    label: 'Instagram da Econverse',
  },
  {
    id: 2,
    name: 'facebook',
    href: 'https://www.facebook.com/agenciaeconverse',
    label: 'Facebook da Econverse',
  },
  {
    id: 3,
    name: 'linkedin',
    href: 'https://linkedin.com/company/econverse',
    label: 'LinkedIn da Econverse',
  },
] as const;

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <img className="footer__logo" src={logo} alt="Econverse" />

          <p className="footer__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <nav className="footer__social" aria-label="Redes sociais">
            {socialLinks.map((social) => (
              <a
                className="footer__social-link"
                key={social.id}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={social.name} size={24} />
              </a>
            ))}
          </nav>
        </div>

        <nav className="footer__navigation" aria-label="Links do rodapé">
          {footerGroups.map((group) => (
            <div className="footer__group" key={group.id}>
              <h3 className="footer__group-title">{group.title}</h3>

              <ul className="footer__list">
                {group.links.map((link) => (
                  <li className="footer__item" key={link.label}>
                    <a className="footer__link" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
