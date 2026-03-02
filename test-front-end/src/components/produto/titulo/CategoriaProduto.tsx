import './categoriaProduto.scss'
function CategoriaProduto (){
    return(
        <section className='section-tipo-produto'>
            <div className="divider-container">
                <div className="divider"></div>
                <h2>Produtos relacionados</h2>
                <div className="divider"></div>
            </div>
            <ul className="categorias-tabs">
                <li>
                <button className="btn-tipo-produto ativo">CELULAR</button>
                </li>
                <li>
                <button className="btn-tipo-produto">ACESSÓRIOS</button>
                </li>
                <li>
                <button className="btn-tipo-produto">TABLETS</button>
                </li>
                <li>
                <button className="btn-tipo-produto">NOTEBOOKS</button>
                </li>
                <li>
                <button className="btn-tipo-produto">TVS</button>
                </li>
                <li>
                <button className="btn-tipo-produto">VER TODOS</button>
                </li>
            </ul>
        </section>
    )
}
export default CategoriaProduto