import TitleContent from '../../components/TitleContent/TitleContent'
import Categories from './Categories/Categories'
import styles from './Home.module.css'
import ProductsCarroussel from './ProductsCarroussel/ProductsCarroussel'

const Home = () => {
  return (
    <>
      <Categories />
      <TitleContent text='Produtos relacionados' />
      <ProductsCarroussel />
    </>

  )
}

export default Home