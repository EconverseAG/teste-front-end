import { useEffect, useState } from 'react';
import VectorLeft from '../../assets/images/Product/VectorL.png'
import VectorRight from '../../assets/images/Product/VectorR.png'
import Product, { ProductProps } from '../Product';
import './style.scss'


function Products() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [position, setPosition] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null); // Produto selecionado para o modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [buyItem, setButItem] = useState(0)
  const itemWidth = 300;

  const increment = () => {
    setButItem(buyItem + 1)
  }

  const decrement = () => {
    if (buyItem >= 1) {
      setButItem(buyItem - 1)
    }
    else {
      console.log('Error')
    }
  }

  const Prev = () => {
    setPosition((prev) => Math.min(prev + itemWidth, 0));
  };

  const Next = () => {
    setPosition((prev) =>
      Math.max(prev - itemWidth, -(itemWidth * (products.length - 3.5)))
    );
  };

  const handleBuyClick = (product: ProductProps) => {
    setSelectedProduct(product); // Define o produto selecionado
    setIsModalOpen(true); // Abre o modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal
    setSelectedProduct(null); // Limpa o produto selecionado
  };
  useEffect(() => {
    fetch('/api/produtos')
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        setProducts(data.products || data);
      })
      .catch(error => console.error('Fetch Error:', error));
  }, []);
  return (
    <div className="Products">
      <div className="vector" onClick={Prev}>
        <img src={VectorLeft} alt="VectorLeft" />
      </div>
      <main>
        <div
          className="product-container"
          style={{ transform: `translateX(${position}px)` }}
        >
          {products.map((product) => (
            <Product key={product.productName}
              desconto={new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price * 1.4)}
              photo={product.photo}
              price={product.price}
              productName={product.productName}
              onBuy={() => handleBuyClick(product)} />
          ))}
        </div>
      </main>
      <div className='vector vector-right' onClick={Next}>
        <img src={VectorRight} alt="VectorRight" />
      </div>

      {isModalOpen && selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <div className='modal-img'>
              <img src={selectedProduct.photo} alt={selectedProduct.productName} />
            </div>

            <div className='description'>
              <h2>{selectedProduct.productName}</h2>
              <p className='ModalPrice'>R$ {selectedProduct.price.toFixed(2)}</p>
              <p className='ModalDescription'>Many desktop publishing packages and web page editors now many desktop publishing</p>
              <p className='ModalDetails'>
                Veja mais detalhes do produto &gt;
              </p>
              <div className='buy'>
                <div className='increase'>
                  <button onClick={decrement}>-</button>
                  <span>{buyItem}</span>
                  <button onClick={increment}>+</button>
                </div>
                <div className='finish'>
                  <button onClick={closeModal}>Comprar</button>
                </div>

              </div>
            </div>

            <div className='Close' onClick={closeModal}>
              <button className='ButtonClose'>X</button>
            </div>

          </div>
        </div>
      )}
    </div>
  )


}

export default Products;

