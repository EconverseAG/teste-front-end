import './cardProduto.scss'
import type Produto from '../../model/model';

interface CardProdutoProps {
    produto: Produto;
    onClick: () => void;
}

function CardProduto({produto, onClick}: CardProdutoProps){
    
    return(
        <>
        <article className="estilo-card" onClick={onClick}> 
        <img src={produto.photo} alt={produto.productName} className="img-celular" />

        <div className="container-info-card">
        <p className="descricao">{produto.descriptionShort}</p>
        <span className="preco-anterior">R$ 30,90</span>
        <h3 className="preco">R$ {produto.price}</h3>
        <h4>ou 2x de R$ 49,95 sem juros</h4>
        <h4 className="frete">Frete Grátis</h4>
        <button className="btn-compra">COMPRAR</button>
        </div>
    </article>
    </>

    )
}
export default CardProduto;