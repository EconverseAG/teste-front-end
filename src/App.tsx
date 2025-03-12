import Header from './containers/Header'
import Banner from './containers/Banner'
import './global.scss'
import Category from './containers/Category'
import RelatedProducts from './containers/RelatedProducts'
import Partner from './containers/Partner'
import RelatedProductsTitle from './Components/RelatedProductsTitle'
import Products from './Components/Products'
import NavigationBrands from './containers/Marcas'
import Footer from './containers/Footer'
import Newsletter from './containers/Newsletter'
function App() {
  return (
    <>
    <div className='index'>
      <Header/>
    </div>
      <Banner/>
    <div className='index'>
      <Category/>
      <RelatedProducts/>
      <Partner/>
      <RelatedProductsTitle title='Produtos relacionados'subTitle='Ver todos'/>
      <Products/>
      <Partner/>
      <NavigationBrands/>
      <RelatedProductsTitle title='Produtos relacionados'subTitle='Ver todos'/>
      <Products/>
    </div>

    <Newsletter/>

    <div className='index'>
        <Footer/>
    </div>
    </>
  )
}

export default App
