import '../footer/footer.scss'
import logo from "../../assets/images/logo.svg"
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
function Footer (){
    return(
        <section>

            <div className="container-letter">
                <div className='container-ajuste'>
                <div className='info-letter'>
                    <h2 className='title-letter'>Inscreva-se na nossa newsletter</h2>
                    <p className='descricao-letter'>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                </div>
                <div className='container-inputs-check'>

                <div className='container-inputs'>
                    <input type="search" placeholder="Digite seu nome" className="estilo-input"/>
                    <input type="search" placeholder="Digite seu email" className='estilo-input' />
                    <button className="btn-inscrever">INSCREVER</button>
                </div>
                <input type="checkbox" name="" id="" className='checkbox' />
                <label htmlFor="" className='text-label'>Aceito os termos e condições</label>
                </div>
                </div>
            </div>

            <div className='container-footer-background'>
            <div className='container-footer'>
                <div className='container-redes'>
                    <img src={logo} alt="logo" className="logo-footer"/>
                    <p className='text-footer-logo'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                    <div className='redesSociais'>
                        <InstagramLogoIcon size={24} color='#4A4A4A'/>
                        <FacebookLogoIcon size={24} color='#4A4A4A'/>
                        <LinkedinLogoIcon size={24} color='#4A4A4A'/>

                    </div>
                </div>

                <div className='divider-footer'></div>
                <div className='container-info-footer'>
                    <h3 className='title-footer'>Institucional</h3>
                    <p className='text-footer'>Sobre Nós</p>
                    <p className='text-footer'>Movimento</p>
                    <p className='text-footer'>Trabalhe conosco</p>
                </div>
                <div className='container-info-footer'>
                    <h3 className='title-footer'>Ajuda</h3>
                     <p className='text-footer'>Suporte</p>
                     <p className='text-footer'>Fale conosco</p>
                     <p className='text-footer'>Perguntas frequentes</p>
                </div>
                <div className='container-info-footer'>
                    <h3 className='title-footer'>Termos</h3>
                     <p className='text-footer'>Termos e Condições</p>
                     <p className='text-footer'>Politica de Privacidade</p>
                     <p className='text-footer'>Troca e Devolução</p>
                </div>
            </div>
            <div className='rodape'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>

        </section>
    )
}
export default Footer;