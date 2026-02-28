import Header from "../components/Header/Header";
import Categoria from "../components/Categorias/Categorias";

function Home() {

    return (

        <>
            <Header />

            <div className="containerHomeCategorias">
                <Categoria imageSrc="/imagensCategorias/Tecnologia.png" text="Tecnologia" />
                <Categoria imageSrc="/imagensCategorias/SuperMercado.png" text="Supermercado" />
                <Categoria imageSrc="/imagensCategorias/whiskey.png" text="Bebidas" />
                <Categoria imageSrc="/imagensCategorias/ferramentas.png" text="Ferramentas" />
                <Categoria imageSrc="/imagensCategorias/cuidados-de-saude.png" text="Saúde" />
                <Categoria imageSrc="/imagensCategorias/corrida.png" text="Esportes e Fitness" />
                <Categoria imageSrc="/imagensCategorias/moda.png" text="Moda" />
            </div>

        </>
    );
}

export default Home;