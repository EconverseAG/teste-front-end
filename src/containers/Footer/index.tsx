import './style.scss'
import Logo from '../../assets/images/footer/Logo.png'
import Instagram from '../../assets/images/footer/instagram.png'
import Facebook from '../../assets/images/footer/facebook.png'
import Linkedin from '../../assets/images/footer/linkedin.png'
function Footer() {
    return (
        <footer>
            <section className='FooterContainer'>
                <div className='FooterAbout'>
                    <img src={Logo} alt="Logo" />
                    <p>
                    Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.
                    </p>

                    <div className='RedeIcons'>
                        <img src={Instagram} alt="Instagram" />
                        <img src={Facebook} alt="Facebook" />
                        <a href="https://www.linkedin.com/in/lucasrrq/" target='_blank'>
                            <img src={Linkedin} alt="Linkedin" />
                        </a>

                    </div>
                </div>
                <div className='FooterDescription'>
                    <div>
                        <h3>Institucional</h3>
                        <ul>
                            <li>Sobre Nós</li>
                            <li>Movimento</li>
                            <li>Trabalhe conosco</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Ajuda</h3>
                        <ul>
                            <li>Suporte</li>
                            <li>Fale Conosco</li>
                            <li>Perguntas Frequentes</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Termos</h3>
                        <ul>
                            <li>Termos e Condições</li>
                            <li>Política de Privacidade</li>
                            <li>Troca e Devolução</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </section>
        </footer>
    )
}

export default Footer