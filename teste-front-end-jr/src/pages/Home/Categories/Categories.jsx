import styles from './Categories.module.css'

const Categories = () => {

    const items = [
        {
            name: 'Tecnologia',
            path: 'src/assets/categories/monitorar-tablet-e-smartohone 1.png'
        },
        {
            name: 'Supermercado',
            path: 'src/assets/categories/supermercados 1.png'
        },
        {
            name: 'Bebidas',
            path: 'src/assets/categories/whiskey.png'
        },
        {
            name: 'Ferramentas',
            path: 'src/assets/categories/ferramentas 1.png'
        },
        {
            name: 'Saúde',
            path: 'src/assets/categories/cuidados-de-saude 1.png'
        },
        {
            name: 'Esportes e Fitness',
            path: 'src/assets/categories/corrida 1.png'
        },
        {
            name: 'Moda',
            path: 'src/assets/categories/moda 1.png'
        },
    ]

    return (
        <section className={styles.container}>
            {items.map((item, index) => (
                <div key={index}>
                    <img src={item.path} alt="" />
                    <p>{item.name}</p>
                </div>
            ))}

        </section>
    )
}

export default Categories