import { useState, useEffect } from 'react';
import type { Produto, ApiResponse } from './types';
import './App.scss';

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Não foi possível carregar a lista de produtos.");
        }
        return response.json();
      })
      .then((data: ApiResponse) => {
        if (data && data.success && Array.isArray(data.products)) {
          setProdutos(data.products);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro na requisição:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <div className="app-status">Carregando vitrine de produtos...</div>;
  }

  if (error) {
    return <div className="app-status error">Ocorreu um erro: {error}</div>;
  }

  return (
    <main className="app-container">
      {/* Usando header para o topo */}
      <header className="main-header">
        <div className="logo-container">
          <img src="/icons.svg" alt="Logo Econverse" />
        </div>
      </header>

      {/* Usando section com aria-label ou títulos claros para SEO */}
      <section className="vitrine-section" aria-labelledby="vitrine-title">
        <h2 id="vitrine-title" className="vitrine-title">Produtos relacionados</h2>

        {/* Lista ordenada ou grid para os cards */}
        <div className="produtos-grid" role="list">
          {produtos.map((produto, index) => (
            <article key={index} className="produto-card" role="listitem">
              <div className="produto-image-wrapper">
                <img src={produto.photo} alt={produto.productName} />
              </div>
              <div className="produto-info">
                <h3>{produto.productName}</h3>
                <p className="description">{produto.descriptionShort}</p>
                <p className="price">
                  R$ {produto.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
                <button className="btn-comprar">COMPRAR</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
