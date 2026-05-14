import Link from "next/link";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.newsletter} id="newsletter" aria-labelledby="newsletter-title">
        <div>
          <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p>Assine e receba novidades, descontos exclusivos e conteúdos selecionados.</p>
        </div>
        <form>
          <label htmlFor="newsletter-name">Nome</label>
          <input id="newsletter-name" name="name" placeholder="Digite seu nome" />
          <label htmlFor="newsletter-email">E-mail</label>
          <input id="newsletter-email" name="email" type="email" placeholder="Digite seu e-mail" />
          <button type="submit">Inscrever</button>
          <label className={styles.accept} htmlFor="newsletter-terms">
            <input id="newsletter-terms" name="terms" type="checkbox" />
            Aceito os termos e condições
          </label>
        </form>
      </section>

      <section className={styles.links} aria-label="Informações institucionais">
        <div className={styles.brand}>
          <img alt="Econverse" src="/figma-assets/footer-logo.svg" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div aria-label="Redes sociais" className={styles.social}>
            <Link aria-label="Instagram" href="/">
              <img alt="" src="/figma-assets/instagram.svg" />
            </Link>
            <Link aria-label="Facebook" href="/">
              <img alt="" src="/figma-assets/facebook.svg" />
            </Link>
            <Link aria-label="LinkedIn" href="/">
              <img alt="" src="/figma-assets/linkedin.svg" />
            </Link>
          </div>
        </div>
        <nav>
          <h2>Institucional</h2>
          <Link href="/">Sobre nós</Link>
          <Link href="/">Movimento</Link>
          <Link href="/">Trabalhe conosco</Link>
        </nav>
        <nav>
          <h2>Ajuda</h2>
          <Link href="/">Suporte</Link>
          <Link href="/">Fale conosco</Link>
          <Link href="/">Perguntas frequentes</Link>
        </nav>
        <nav>
          <h2>Termos</h2>
          <Link href="/">Termos e condições</Link>
          <Link href="/">Política de privacidade</Link>
          <Link href="/">Trocas e devoluções</Link>
        </nav>
      </section>
      <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
    </footer>
  );
}
