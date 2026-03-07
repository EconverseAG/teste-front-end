import styles from './Header.module.scss'
import MainHeader from './MainHeader/MainHeader'
import TopHeader from './TopHeader/TopHeader'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'

const Header = () => {
    return (
        <div className={styles.container}>
            <TopHeader />
            <MainHeader />
            <Navbar />
            <Banner />
        </ div>
    )
}

export default Header