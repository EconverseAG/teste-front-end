import styles from './MainHeader.module.css'
import { Link } from 'react-router-dom'

const MainHeader = () => {

    return (
        <section className={styles.container}>
            <div className={styles.logo}>
                <img src="src\assets\header\Group 35.svg" alt="" />
            </div>
            <div className={styles.input_search}>
                <input type="text" placeholder='O que você está buscando?' />
                <img src="src\assets\header\MagnifyingGlass.svg" alt="" />
            </div>
            <div className={styles.actions}>
                <Link to='/'>
                    <img src="src\assets\header\Group.svg" alt="" />
                </Link>
                <Link to='/'>
                    <img src="src\assets\header\Heart.svg" alt="" />
                </Link>
                <Link to='/'>
                    <img src="src\assets\header\UserCircle.svg" alt="" />

                </Link>
                <Link to='/'>
                    <img src="src\assets\header\ShoppingCart.svg" alt="" />
                </Link>
            </div>
        </section>
    )
}

export default MainHeader