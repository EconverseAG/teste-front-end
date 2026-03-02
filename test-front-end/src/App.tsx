import NavBar from './components/nav/NavBar'
import './index.scss'
import Banner from './components/banner/Banner'
import CategoriaLista from './components/categoria/CategoriaLista'
import ListaMarcas from './components/marcas/ListaMarcas'
import Footer from './components/footer/Footer'
import CategoriaProduto from './components/produto/titulo/CategoriaProduto'
import TituloSelecionado from './components/produto/titulo/Selecionado'
import ListaParceiros from './components/parceiros/ListaParceiros'
import ListaProduto from './components/produto/ListaProduto'

function App() {

  return (
    <>
    <NavBar />
    <Banner />
    <CategoriaLista/>
    <CategoriaProduto />
    <ListaProduto/>
    <ListaParceiros/>
    <TituloSelecionado/>
    <ListaProduto/>
    <ListaParceiros/>
    <ListaMarcas/>
    <TituloSelecionado/>
    <ListaProduto/>
    <Footer/>
        
    </>
  )
}

export default App
