import { useState } from 'react';
import { Brand } from './Brand';

export function Footer() {
  const [message, setMessage] = useState('');
  return (
    <footer>
      <section className="newsletter" id="newsletter">
        <div className="newsletter__inner page-width">
          <div><h2>Inscreva-se na nossa newsletter</h2><p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos<br className="desktop-only" /> da Econverse.</p></div>
          <form onSubmit={(event) => { event.preventDefault(); setMessage('Formulário demonstrativo: o cadastro não está conectado a um serviço de newsletter.'); }}>
            <label className="sr-only" htmlFor="newsletter-name">Digite seu nome</label><input id="newsletter-name" placeholder="Digite seu nome" required />
            <label className="sr-only" htmlFor="newsletter-email">Digite seu e-mail</label><input id="newsletter-email" type="email" placeholder="Digite seu e-mail" required />
            <button className="button button--yellow" type="submit">Inscrever</button>
            <label className="newsletter__consent"><input type="checkbox" required /> Aceito os termos e condições</label>
            {message && <p className="newsletter__message" role="status">{message}</p>}
          </form>
        </div>
      </section>
      <div className="footer-main page-width">
        <div className="footer-about"><Brand /><p>Descubra um jeito mais simples<br />de comprar tudo o que você precisa.</p><div className="social-links"><a href="#inicio" aria-label="Instagram">◎</a><a href="#inicio" aria-label="Facebook">f</a><a href="#inicio" aria-label="LinkedIn">in</a></div></div>
        <nav className="footer-links" aria-label="Institucional"><h3>Institucional</h3><a href="#inicio">Sobre Nós</a><a href="#inicio">Movimento</a><a href="#inicio">Trabalhe conosco</a></nav>
        <nav className="footer-links" aria-label="Ajuda"><h3>Ajuda</h3><a href="#inicio">Suporte</a><a href="#inicio">Fale Conosco</a><a href="#inicio">Perguntas Frequentes</a></nav>
        <nav className="footer-links" aria-label="Termos"><h3>Termos</h3><a href="#inicio">Termos e Condições</a><a href="#inicio">Política de Privacidade</a><a href="#inicio">Troca e Devolução</a></nav>
      </div>
      <div className="copyright">Econverse © 2026. Todos os direitos reservados.</div>
    </footer>
  );
}
