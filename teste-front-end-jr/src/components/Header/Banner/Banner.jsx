import { Link } from 'react-router-dom';
import styles from './Banner.module.css'
// import imageBackground from 

const Banner = () => {

    const imageStyle = {
        width: "100%",
        height: "395px",
        backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundImage: "url('src/assets/header/Rectangle.png')"
    };
    return (
        <section style={imageStyle}>
            <main className={styles.container} >
                <div>
                    <h1>Venha conhecer nossas promoções</h1>
                    <p>50% Off nos produtos </p>
                    <Link className={styles.btn}>Ver produto</Link>

                </div>
            </main>
        </section>
    )
}

export default Banner