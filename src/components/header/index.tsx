import './index.scss';

export default function Header(){
    return (
        <header className="container-header">
            <article className="header-head">
                <ul>
                    <li>
                        <p>icon</p>
                        Compra 100% segura
                    </li>
                    <li>
                        <p>icon</p>
                        Frete gŕatis acima de R$ 200
                    </li>
                    <li>
                        <p>icon</p>
                        Parcele suas compras
                    </li>
                </ul>
            </article>
            <article className="header-main">
                <h1>Econverse</h1>
                <div>
                    <input type="text" placeholder='O que você esta buscando?'/>
                    <p>icon</p>
                </div>
                <ul>
                    <li>icon 1</li>
                    <li>icon 2</li>
                    <li>icon 3</li>
                    <li>icon 4</li>
                </ul>
            </article>
            <article className="header-footer">
                <ul>
                    <li>TODAS AS CATEGORIAS</li>
                    <li>SUPERMERCADO</li>
                    <li>LIVROS</li>
                    <li>MODA</li>
                    <li>LANÇAMENTOS</li>
                    <li className='header-active'>OFERTAS DO DIA</li>
                    <li>ASSINATURA</li>
                </ul>
            </article>
        </header>
    )
}