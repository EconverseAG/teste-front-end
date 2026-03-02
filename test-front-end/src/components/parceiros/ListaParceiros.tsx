import CardParceiro from './CardParceiro'
import './listaParceiros.scss'
function ListaParceiros (){
    return(
        <section className='section-parceiros'>
            <div className='container-card-parceiros'>
             <CardParceiro />
             <CardParceiro />
             </div>
        </section>
       
    )
}
export default ListaParceiros