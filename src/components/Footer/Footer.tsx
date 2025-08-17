import './Footer.scss';
import logo from "../../assets/logo.png";

import instagramIcon from '../../assets/icons/instagram.png';
import facebookIcon from '../../assets/icons/facebook.png';
import linkedinIcon from '../../assets/icons/linkedin.png';

interface Social {
    id: number;
    nome: string;
    link: string;
    icone: string;
}

const redesSociais: Social[] = [
    { id: 3, nome: "Instagram", link: "https://instagram.com", icone: instagramIcon },
    { id: 1, nome: "Facebook", link: "https://facebook.com", icone: facebookIcon },
    { id: 2, nome: "Linkedin", link: "https://linkedin.com", icone: linkedinIcon },
];

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer__content">
                    <div className="footer__box">
                        <div className="footer__logo">
                            <img src={logo} alt="Logo econverse" title="Logo econverse" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit.</p>
                        <div className="footer__social">
                            {redesSociais.map((rede) => (
                                <a
                                    key={rede.id}
                                    href={rede.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={rede.nome}
                                >
                                    <img src={rede.icone} alt={rede.nome} />
                                </a>
                            ))}
                        </div>
                    </div>
                    {/*  */}
                    <div className="footer-links__group">
                        <div className="footer__links-box">
                            <h3>Intitucional</h3>
                            <ul className="footer__links">
                                <li><a href="#">Sobre Nós</a></li>
                                <li><a href="#">Movimento</a></li>
                                <li><a href="#">Trabalhe conosco</a></li>
                            </ul>
                        </div>
                        <div className="footer__links-box">
                            <h3>Ajuda</h3>
                            <ul className="footer__links">
                                <li><a href="#">Suporte</a></li>
                                <li><a href="#">Fale Conosco</a></li>
                                <li><a href="#">Perguntas Frequentes</a></li>
                            </ul>
                        </div>
                        <div className="footer__links-box">
                            <h3>Termos</h3>
                            <ul className="footer__links">
                                <li><a href="#">Termos e Condições</a></li>
                                <li><a href="#">Política de Privacidade</a></li>
                                <li><a href="#">Troca e Devolução</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*  */}
            </div>
            <div className="footer-copyright">
                <p>
                    &copy; {new Date().getFullYear()} Econverse. Desenvolvido por{' '}
                    <a
                        href="https://github.com/Miltonnn"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Perfil do desenvolvedor Milton Andrade"
                    >
                        <span>@Milton Andrade</span>
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;
