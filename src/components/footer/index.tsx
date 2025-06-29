import './index.scss';

//imagens
import imgLogo from '../../assets/img/Logo.png'

const Footer: React.FC = () => {
    return (
        <footer className="container-footer">
            <article className="footer-head">
                <div className="left-footer-head">
                    <h1>Inscreva-se na nossa newsletter</h1>
                    <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                </div>
                <div className="right-footer-head">
                    <div className="form-head">
                        <input type="text" placeholder="Digite seu nome"/>
                        <input type="text" placeholder="Digite seu e-mail"/>
                        <button>INSCREVER</button>
                    </div>
                    <div className="terms-head">
                        <input type="checkbox" name="terms-footer" id="terms-footer" />
                        <p>Aceito os termos e condições</p>
                    </div>
                </div>
            </article>
            <article className="footer-main">
                <div className="main-social">
                    <img src={imgLogo} alt="imagem da logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div>
                        <p>insta</p>
                        <p>face</p>
                        <p>linkedin</p>
                    </div>
                </div>
                <div className="layout-center"></div>
                <div className="links-main">
                    <ul>
                        <li><span>Institucional</span></li>
                        <li>Sobre Nós</li>
                        <li>Movimento</li>
                        <li>Trabalhe conosco</li>
                    </ul>
                    <ul>
                        <li><span>Ajuda</span></li>
                        <li>Suporte</li>
                        <li>Fale Conosco</li>
                        <li>Perguntas Frequentes</li>
                    </ul>
                    <ul>
                        <li><span>Termos</span></li>
                        <li>Termos e Condições</li>
                        <li>Política e Privacidade</li>
                        <li>Troca e Devolução</li>
                    </ul>
                </div>
            </article>
            <div className="footer">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </footer>
    )
}

export default Footer;
