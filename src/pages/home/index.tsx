
import './index.scss';
import AllProducts from '../../components/allProducts';
import Carousel from '../../components/carousel';

//imagens
import imgTecnologia from '../../assets/img/home/tecnologia.png'
import imgMercado from '../../assets/img/home/mercado.png'
import imgBebidas from '../../assets/img/home/bebidas.png'
import imgFerramentas from '../../assets/img/home/ferramentas.png'
import imgSaude from '../../assets/img/home/cuidado.png'
import imgEsportes from '../../assets/img/home/caminhada.png'
import imgModa from '../../assets/img/home/moda.png'
import imgLogo from '../../assets/img/Logo.png'

import Footer from '../../components/footer';

const Home: React.FC = () => {
  return (
    <section className="container-home">
      <article className="container-promocao">
        <h1>Venha conhecer nossas promoções</h1>
        <h2><span>50% Off</span> nos produtos</h2>
        <button>Ver Produto</button>
      </article>

      <article className="container-categorias">
        <ul>
          <li className='active-categoria'>
            <div className='item-categoria'>
              <img src={imgTecnologia} alt="imagem da categoria" />
            </div>
            <p>Tecnologia</p>
          </li>
          <li>
            <div className='item-categoria'>
              <img src={imgMercado} alt="imagem da categoria" />
            </div>
            <p>Supermercado</p>
          </li>
          <li>
            <div className='item-categoria'>
              <img src={imgBebidas} alt="imagem da categoria" />
            </div>
            <p>Bebidas</p>
          </li>
          <li>
            <div className='item-categoria'>
              <img src={imgFerramentas} alt="imagem da categoria" />
            </div>
            <p>Ferramentas</p>
          </li>
          <li>
            <div className='item-categoria'>
              <img src={imgSaude} alt="imagem da categoria" />
            </div>
            <p>Saúde</p>
          </li>
          <li>
            <div className='item-categoria'>
              <img src={imgEsportes} alt="imagem da categoria" />
            </div>
            <p>Esportes e Fitness</p>
          </li>
          <li>
            <div className='item-categoria'>
              <img src={imgModa} alt="imagem da categoria" />
            </div>
            <p>Moda</p>
          </li>

        </ul>
      </article>

      <article className="container-produtos">
        <div className="layout-products">
          <span></span>
          <h1>Produtos relacionados</h1>
          <span></span>
        </div>
        <ul>
          <li className='products-active'>CELULAR</li>
          <li>ACESSÓRIOS</li>
          <li>TABLETS</li>
          <li>NOTEBOOKS</li>
          <li>TVS</li>
          <li>VER TODOS</li>
        </ul>

        <Carousel />
       
      </article>

      <article className="container-parceiros">
          <div className="parceiro-left">
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>CONFIRA</button>
          </div>
          <div className="parceiro-right">
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>CONFIRA</button>
          </div>
      </article>

      <article className="container-marcas">
        <h1>Navegue por marcas</h1>

        <div className="marcas-main">
          <ul>
            <li><img src={imgLogo} alt="imagem da marca" /></li>
            <li><img src={imgLogo} alt="imagem da marca" /></li>
            <li><img src={imgLogo} alt="imagem da marca" /></li>
            <li><img src={imgLogo} alt="imagem da marca" /></li>
            <li><img src={imgLogo} alt="imagem da marca" /></li>
          </ul>
        </div>
      </article>



      <AllProducts />


      <Footer />

    </section>
  );
};

export default Home;