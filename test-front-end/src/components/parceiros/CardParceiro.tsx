import imgParceiro from '../../assets/images/imagemCard.svg'
import '../parceiros/cardParceiro.scss'
function CardParceiro(){
    return(
        <article className="container-card">

            <div className='container-info-parceiro'>
            <h2 className='title'>Parceiros</h2>
            <p className='descricao-parceiros'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit.</p>
            <button className='btn-confira'>CONFIRA</button>
            </div>
        </article>
    )
}
export default CardParceiro;