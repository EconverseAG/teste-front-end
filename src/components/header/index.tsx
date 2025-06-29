import React from 'react';
import './index.scss';

//imagens
import imgSearch from '../../assets/img/header/search.png'

import imgCart from '../../assets/img/header/ShoppingCart.png'
import imgHeart from '../../assets/img/header/Heart.png'
import imgGroup from '../../assets/img/header/Group.png'
import imgUser from '../../assets/img/header/UserCircle.png'

import imgCard from '../../assets/img/header/CreditCard.png'
import imgCheck from '../../assets/img/header/ShieldCheck.png'
import imgTruck from '../../assets/img/header/Truck.png'

import imgLogo from '../../assets/img/Logo.png'

const Header: React.FC = () => {
    return (
        <header className="container-header">
            <article className="header-head">
                <ul>
                    <li>
                        <img src={imgCard} alt="Imagem benefícios" />
                        Compra <span>100% segura</span>
                    </li>
                    <li>
                        <img src={imgCheck} alt="Imagem benefícios" />
                        <span>Frete grátis</span> acima de R$ 200
                    </li>
                    <li>
                        <img src={imgTruck} alt="Imagem benefícios" />
                        <span>Parcele</span> suas compras
                    </li>
                </ul>
            </article>
            <article className="header-main">
                <img src={imgLogo} alt="logo" />
                <div>
                    <input type="text" placeholder='O que você está buscando?' />
                    <img src={imgSearch} alt="imagem do input search" />
                </div>
                <ul>
                    <li>
                        <img src={imgGroup} alt="imagem do menu header" />

                    </li>
                    <li>
                        <img src={imgHeart} alt="imagem do menu header" />

                    </li>
                    <li>
                        <img src={imgUser} alt="imagem do menu header" />

                    </li>
                    <li>
                        <img src={imgCart} alt="imagem do menu header" />

                    </li>
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
    );
}

export default Header;