import './style.scss'
import Logo from '../../assets/images/brands/Logo.png'

function CicleBrands(){
    return(
        <section className="CicleBrandContainer">
            <div className='CicleImg'>
                 <img src={Logo} alt="Logo" />
            </div>
        </section>
    )
}

export default CicleBrands