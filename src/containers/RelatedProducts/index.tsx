import Products from '../../Components/Products';
import RelatedProductsTitle from '../../Components/RelatedProductsTitle';
import './style.scss'
function RelatedProducts() {
  return (
    <section className='RelatedProducts'>
        <RelatedProductsTitle title='Produtos relacionados
'/>
      <div className="ListProducts">
            <button>Celular</button>
            <button>Acessórios</button>
            <button>Tablets</button>
            <button>Notebooks</button>
            <button>Tvs</button>
            <button>Ver todos</button>
      </div>

      <Products/>
    </section>
  );
}

export default RelatedProducts;