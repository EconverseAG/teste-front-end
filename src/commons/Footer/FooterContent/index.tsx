import styles from "../Footer.module.scss";

import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const FooterContent = () => {
  return (
    <div className={styles.footerContent}>
      <div>
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            title="Logo"
            width={164}
            height={48}
            loading="lazy"
          />
        </Link>
        <p className={styles.footerText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className={styles.footerSocialMedia}>
          <a
            href="/"
            target="_blank"
            rel="noopener"
            aria-label="Ir para o Instagram"
          >
            <svg
              aria-hidden
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                stroke="#4A4A4A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 11.3701C16.1234 12.2023 15.9812 13.0523 15.5937 13.7991C15.2062 14.5459 14.5931 15.1515 13.8416 15.5297C13.0901 15.908 12.2384 16.0397 11.4077 15.906C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09402 12.5923C7.96035 11.7616 8.09202 10.91 8.47028 10.1584C8.84854 9.40691 9.45414 8.7938 10.2009 8.4063C10.9477 8.0188 11.7977 7.87665 12.63 8.00006C13.4789 8.12594 14.2648 8.52152 14.8716 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z"
                stroke="#4A4A4A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 6.5H17.51"
                stroke="#4A4A4A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener"
            aria-label="Ir para o Facebook"
          >
            <svg
              aria-hidden
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                stroke="#4A4A4A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener"
            aria-label="Ir para o Linkedin"
          >
            <svg
              aria-hidden
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                stroke="#4A4A4A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 9H2V21H6V9Z"
                stroke="#4A4A4A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                stroke="#4A4A4A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.footerMenu}>
        <div className={styles.footerMenuItem}>
          <h4>Institucional</h4>
          <ul>
            <li>
              <Link to="/" aria-label="Visitar página Sobre Nós">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link to="/" aria-label="Visitar página Movimento">
                Movimento
              </Link>
            </li>
            <li>
              <Link to="/" aria-label="Visitar página Trabalhe conosco">
                Trabalhe conosco
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerMenuItem}>
          <h4>Ajuda</h4>
          <ul>
            <li>
              <Link to="/" aria-label="Visitar página Suporte">
                Suporte
              </Link>
            </li>
            <li>
              <Link to="/" aria-label="Visitar página Fale Conosco">
                Fale Conosco
              </Link>
            </li>
            <li>
              <Link to="/" aria-label="Visitar página Perguntas Frequentes">
                Perguntas Frequentes
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerMenuItem}>
          <h4>Termos</h4>
          <ul>
            <li>
              <Link to="/" aria-label="Visitar página Termos e Condições">
                Termos e Condições
              </Link>
            </li>
            <li>
              <Link to="/" aria-label="Visitar página Política de Privacidade">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link to="/" aria-label="Visitar página Troca e Devolução">
                Troca e Devolução
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
