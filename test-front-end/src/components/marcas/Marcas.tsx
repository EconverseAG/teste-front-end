import logo from '../../assets/images/logo.svg'
import '../marcas/marcas.scss'
function Marcas (){
    return(
        <div className='container-circulo'>
            <img src={logo} alt="logo da empresa" className='img-marcas'/>
        </div>
    )
}
export default Marcas;