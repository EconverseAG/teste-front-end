import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../Icons/Icons';
import { Logo } from '../Logo/Logo';
import { footerColumns } from './footerLinks';
import './Footer.scss';

const socialLinks = [
  { id: 'instagram', label: 'Instagram', href: '#instagram', icon: <InstagramIcon size={22} /> },
  { id: 'facebook', label: 'Facebook', href: '#facebook', icon: <FacebookIcon size={22} /> },
  { id: 'linkedin', label: 'LinkedIn', href: '#linkedin', icon: <LinkedinIcon size={22} /> },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__brand">
          <Logo />
          <p className="footer__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul className="footer__social">
            {socialLinks.map(({ id, label, href, icon }) => (
              <li key={id}>
                <a href={href} aria-label={label}>
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="footer__columns" aria-label="Links do rodapé">
          {footerColumns.map(({ title, links }) => (
            <div key={title} className="footer__column">
              <h2 className="footer__column-title">{title}</h2>
              <ul className="footer__links">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <p className="footer__copyright">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </footer>
  );
}
