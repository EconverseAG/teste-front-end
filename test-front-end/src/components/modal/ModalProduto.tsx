import { useState } from "react";
import type Produto from "../../model/model"
import './modalProduto.scss'

interface ModalProps {
  produto: Produto;
  onClose: () => void;
}

function Modal({ produto, onClose }: ModalProps) {
    const[contador, setContador] = useState(1)

    function adicionarNum() {
  setContador((valorAnterior) => valorAnterior + 1);
}

function removerNum() {
  setContador((valorAnterior) => {
    if (valorAnterior > 1) {
      return valorAnterior - 1;
    }
    return valorAnterior;
  });
}

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>
          ✕
        </button>

        <div className="container-ajustes-modal">
        <img src={produto.photo} alt={produto.productName} />

        <div className="container-ajuste-info-modal">

        <div  className="container-title-modal">
        <h2>{produto.productName}</h2>
        <h3>R$ {produto.price}</h3>
        </div>

        <div className="container-descricao">
            <p>{produto.descriptionShort}</p>
            <h3>Veja mais detalhes do produto </h3>
        </div>

        <div className="container-button">
            <div className="contador">
            <button onClick={removerNum} className="btn-contador">-</button>
            <h2>{contador}</h2>
            <button onClick={adicionarNum} className="btn-contador">+</button>
            </div>
            <button className="btn-compra-modal">COMPRAR</button>
        </div>

        </div>
        </div>
        

        

        
      </div>
    </div>
  );
}

export default Modal;