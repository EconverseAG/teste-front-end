import { FOOTER_COLUMNS, SOCIAL_LINKS } from '../../data/content';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-links">
        <div className="footer-brand">
          <img className="footer-logo" src="/image/Logo.png" alt="Econverse" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <ul className="footer-social">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer noopener" aria-label={social.label}>
                  <img src={social.image} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <nav className="footer-column" key={column.id} aria-labelledby={column.id}>
            <h3 id={column.id}>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="footer-bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}
