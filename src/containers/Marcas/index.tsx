import CicleBrands from '../../Components/CircleBrands'
import RelatedProductsTitle from '../../Components/RelatedProductsTitle'
import './style.scss'

function NavigationBrands(){
    return(
        <section className='NavigationContainer'>
            <RelatedProductsTitle title='Navegue por marcas'  hr={false}/>
            <div className='ContainerCicleBrands'>
                <CicleBrands/>
                <CicleBrands/>
                <CicleBrands/>
                <CicleBrands/>
                <CicleBrands/>
            </div>
        </section>
    )
}
export default NavigationBrands