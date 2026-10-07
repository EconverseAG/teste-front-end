import { Icon, Logo } from "@/components/atoms"
import { FooterColumn } from "@/components/molecules"
import { FOOTER_COLUMNS, SOCIAL_LINKS } from "@/content/home"
import styles from "./Footer.module.scss"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo variant="footer" />
          <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul className={styles.social} aria-label="Redes sociais">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={`${social.label} (abre em nova aba)`}
                >
                  <Icon name={social.icon} size={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.columns}>
          {FOOTER_COLUMNS.map((column) => (
            <FooterColumn key={column.title} {...column} />
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  )
}
