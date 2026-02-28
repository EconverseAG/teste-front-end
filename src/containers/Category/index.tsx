import Card from '../../Components/Cards/Card';
import './style.scss'
import Tecnologia from '../../assets/images/category/image.png'
import Supermercados from '../../assets/images/category/supermercados.png'
import Bebida from '../../assets/images/category/whiskey.png'
import Ferramentas from '../../assets/images/category/ferramentas.png'
import Saude from '../../assets/images/category/cuidados-de-saude.png'
import Esportes from '../../assets/images/category/corrida.png'
import Moda from '../../assets/images/category/moda.png'
function Category() {
  return (
    <aside className="category">
        <Card imagem={Tecnologia} text="Tecnologia"/>
        <Card imagem={Supermercados} text="supermercados"/>
        <Card imagem={Bebida} text="corrida"/>
        <Card imagem={Ferramentas} text="Tecnologia"/>
        <Card imagem={Saude} text="Tecnologia"/>
        <Card imagem={Esportes} text="Tecnologia"/>
        <Card imagem={Moda} text="Tecnologia"/>
    </aside>
  );
}

export default Category;