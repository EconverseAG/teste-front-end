import { HeaderBar, HeaderShip, HeaderLogo, HeaderMenu } from "./styles"

import cartao from "../../assets/images/CreditCard.svg"
import check from "../../assets/images/ShieldCheck.svg"
import truck from "../../assets/images/Truck.svg"
import logo from "../../assets/images/logo.svg"
import cart from "../../assets/images/ShoppingCart.svg"
import heart from "../../assets/images/Heart.svg"
import box from "../../assets/images/Group.jpg"
import lupa from "../../assets/images/lupa.svg"
import person from "../../assets/images/person.svg"



const Header = () => (
    <HeaderBar>
        <HeaderShip>
            <div>
                <img src={check} alt="" />
                <p>
                    Compra <span>100% segura</span>
                </p>
            </div>
            <div>
                <img src={truck} alt="" />
                <p>
                    <span>Frete grátis</span> acima de R$ 200
                </p>
            </div>
            <div>
                <img src={cartao} alt="" />
                <p>
                    <span>Parcele</span> suas compras
                </p>
            </div>
        </HeaderShip>
        <HeaderLogo>
            <div>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <input type="text" placeholder="O que você está buscando?" />
                    <img src={lupa} alt="" />
                </div>
                <div>
                    <img src={box} alt="" />
                    <img src={heart} alt="" />
                    <img src={person} alt="" />
                    <img src={cart} alt="" />
                </div>
            </div>
        </HeaderLogo>
        <HeaderMenu>
            <div>
                <ul>
                    <li>
                        TODAS AS CATEGORIAS
                    </li>
                    <li>
                        SUPERMERCADO
                    </li>
                    <li>
                        LIVROS
                    </li>
                    <li>
                        MODA
                    </li>
                    <li>
                        LANÇAMENTOS
                    </li>
                    <li>
                        OFERTAS DO DIA
                    </li>
                    <li>
                        ASSINATURA
                    </li>
                </ul>
            </div>
        </HeaderMenu>
    </HeaderBar>
)

export default Header