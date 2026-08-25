import styles from './TopHeader.module.css'

const TopHeader = () => {
    return (
        <header className={styles.container}>
            <section className={styles.header}>
                <div>
                    <img src="src\assets\header\ShieldCheck.svg" alt="" />
                    <p>Compra <span>100% segura</span></p>
                </div>
                <div>
                    <img src="src\assets\header\Truck.svg" alt="" />
                    <p><span>Frete grátis</span> acima de R$ 200</p>
                </div>
                <div>
                    <img src="src\assets\header\CreditCard.svg" alt="" />
                    <p><span>Parcele </span>suas compras</p>
                </div>
            </section>
        </header>
    )
}

export default TopHeader