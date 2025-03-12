
import './style.scss'
export type ProductProps = {
    photo: string;
    price: number;
    productName: string;
    desconto: string;
    onBuy?: () => void; 
}

function Product({photo, price, productName, desconto, onBuy}: ProductProps) {

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price);
      };


  return (
        <div className='ContainerProduct'>
            <div className="product-img">
                <img src={photo} alt="photo" />
            </div>
            <div className="product-details">
                <p className='ProductName'>{productName}</p>
                <p>{desconto}</p>
                <p className='price'>{formatPrice(price)}</p>
                <p className='Parcelamento'>ou 2x de {formatPrice(price / 2)} sem juros</p>
                <p className='Frete'>Frete grátis</p>
            </div>

            <div className="product-button">
                <button onClick={onBuy}>Comprar</button>
            </div>
        </div>
)
}

export default Product;