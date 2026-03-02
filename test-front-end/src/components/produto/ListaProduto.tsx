import CardProduto from "./CardProduto";
import '../produto/listaProdutos.scss'
import type Produto from "../../model/model";
import data from '../../data/produtos.json'
import { useEffect, useRef, useState } from "react";
import Modal from "../modal/ModalProduto";


function Lista (){
       const[produtos, setProdutos] = useState<Produto[]>([])
       const sliderRef = useRef<HTMLDivElement>(null);
        const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

        useEffect(() => {
        setProdutos(data.products);
        }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 325;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 325;
    }
  };

  return (
    <section className="section-lista-produtos">
    <div className="slider-container">
      <button className="seta esquerda" onClick={scrollLeft}>
        ❮
      </button>

      <div className="slider" ref={sliderRef}>
        {produtos.map((produto, index) => (
          <CardProduto key={index} produto={produto} onClick={() => setProdutoSelecionado(produto)}/>
        ))}
      </div>

      <button className="seta direita" onClick={scrollRight}>
        ❯
      </button>
    </div>
    {produtoSelecionado && (
        <Modal
          produto={produtoSelecionado}
          onClose={() => setProdutoSelecionado(null)}
        />
      )}
    
    </section>
  );
}
export default Lista;