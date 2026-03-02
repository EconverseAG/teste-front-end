import Marcas from "./Marcas";
import '../marcas/listaMarcas.scss'

function ListaMarcas (){
    return(
        <section className="section-marcas">
            <h2>Navegue por marcas</h2>
            <div className="container-todas-marcas">
            <Marcas />
             <Marcas />
              <Marcas />
               <Marcas />
                <Marcas />
                </div>
        </section>
    )
}
export default ListaMarcas;