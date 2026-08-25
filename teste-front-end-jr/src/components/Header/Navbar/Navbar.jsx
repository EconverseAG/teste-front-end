import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const items = [
        {
            page: 'Todas categorias',
            link: '/',
            active: false
        },
        {
            page: 'Supermercado',
            link: '/',
            active: false
        },
        {
            page: 'Livros',
            link: '/',
            active: false
        },
        {
            page: 'Moda',
            link: '/',
            active: false
        },
        {
            page: 'Lançamentos',
            link: '/',
            active: false
        },
        {
            page: 'Ofertas do dia',
            link: '/',
            active: true
        },
        {
            page: 'Assinatura',
            link: '/',
            active: false
        },
    ]

    return (
        <nav className={styles.container}>
            <ul>
                {items.map((item, index) => (
                    <li className={(item.active ? styles.active : '')}>
                        <NavLink key={index} to={`${item.link}`} className={styles.links}> {item.page}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar