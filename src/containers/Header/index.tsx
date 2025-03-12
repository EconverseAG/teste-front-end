import { useState } from 'react';
import Logo from '../../assets/images/header/Logo.png';
import Lupa from '../../assets/images/header/MagnifyingGlass.png';
import Heart from '../../assets/images/header/Heart.png';
import ShoppingCart from '../../assets/images/header/ShoppingCart.png';
import UserCircle from '../../assets/images/header/UserCircle.png';
import ShieldCheck from '../../assets/images/header/ShieldCheck.png';
import Truck from '../../assets/images/header/Truck.png';
import CreditCard from '../../assets/images/header/CreditCard.png';
import Group from '../../assets/images/header/Group.png';
import CrownSimple from '../../assets/images/header/CrownSimple.png';
import './style.scss';

function Header() {
    const [selectedIndex, setSelectedIndex] = useState<number>(5); // Inicializa com o índice 5

    const handleSpanClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <header>
            <section className='header-top'>
                <div>
                    <img src={ShieldCheck} alt="ShieldCheck" />
                    <p>Compra&nbsp;<span>100% segura</span></p>
                </div>
                <div>
                    <img src={Truck} alt="Truck" />
                    <p><span>Frete grátis</span> &nbsp;acima de R$ 200</p>
                </div>
                <div>
                    <img src={CreditCard} alt="CreditCard" />
                    <p><span>Parcele</span> &nbsp;suas compras</p>
                </div>
            </section>

            <section className='header-center'>
                <div className='logo'>
                    <img className='Logo' src={Logo} alt="Logo" />
                </div>

                <nav>
                    <input type="text" placeholder="O que você está buscando?" />
                    <img src={Lupa} alt="Search Icon" />
                </nav>

                <div className='icons'>
                    <img src={Group} alt="Group" />
                    <img src={Heart} alt="Heart" />
                    <img src={UserCircle} alt="UserCircle" />
                    <img src={ShoppingCart} alt="ShoppingCart" />
                </div>
            </section>

            <section className='header-bottom'>
                {['Todas Categorias', 'Supermercado', 'Livros', 'Moda', 'Lançamentos', 'Ofertas do dia'].map((text, index) => (
                    <span
                        key={index}
                        onClick={() => handleSpanClick(index)}
                        className={selectedIndex === index ? 'selected' : ''}
                    >
                        {text}
                    </span>
                ))}
                <div className='subscription'>
                    <div className='crown'>
                        <img src={CrownSimple} alt="CrownSimple" />
                    </div>
                    <span
                        onClick={() => handleSpanClick(6)}
                        className={selectedIndex === 6 ? 'selected' : ''}
                    >
                        Assinatura
                    </span>
                </div>
            </section>
        </header>
    );
}

export default Header;