import React from 'react';
import styles from './Footer.module.scss';
import { LogoEconverse } from '../../atoms/Icons';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Bar */}
      <div className={styles.topBar}></div>
      
      {/* Main Footer Content */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          {/* Left Section - Brand Information */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <a href="https://www.econverse.com.br/" target="_blank" rel="noopener noreferrer">
                <LogoEconverse size={120} />
              </a>
            </div>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={styles.socialMedia}>
              <a href="https://www.instagram.com/econverse.ag" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/agenciaeconverse" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/econverse/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Divider */}
          <div className={styles.divider}></div>
          
          {/* Right Section - Navigation Links */}
          <div className={styles.navigationSection}>
            <div className={styles.navColumn}>
              <h4>Institucional</h4>
              <ul>
                <li><a href="https://www.econverse.com.br/" target="_blank" rel="noopener noreferrer">Sobre Nós</a></li>
                <li><a href="https://www.econverse.com.br/" target="_blank" rel="noopener noreferrer">Movimento</a></li>
                <li><a href="https://www.econverse.com.br/" target="_blank" rel="noopener noreferrer">Trabalhe conosco</a></li>
              </ul>
            </div>
            
            <div className={styles.navColumn}>
              <h4>Ajuda</h4>
              <ul>
                <li><a href="https://www.econverse.com.br/" target="_blank" rel="noopener noreferrer">Suporte</a></li>
                <li><a href="https://www.econverse.com.br/" target="_blank" rel="noopener noreferrer">Fale Conosco</a></li>
                <li><a href="https://www.econverse.com.br/" target="_blank" rel="noopener noreferrer">Perguntas Frequentes</a></li>
              </ul>
            </div>
            
            <div className={styles.navColumn}>
              <h4>Termos</h4>
              <ul>
                <li><a href="https://www.econverse.com.br/" target="_blank" rel="noopener noreferrer">Termos e Condições</a></li>
                <li><a href="https://www.econverse.com.br/" target="_blank" rel="noopener noreferrer">Política de Privacidade</a></li>
                <li><a href="https://www.econverse.com.br/" target="_blank" rel="noopener noreferrer">Troca e Devolução</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p>Feito com amor para <a href="https://www.econverse.com.br/" target="_blank" rel="noopener noreferrer">Econverse</a> por Jhonatan Serafim</p>
      </div>
    </footer>
  );
};

export default Footer; 