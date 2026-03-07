import styles from './TitleContent.module.css'

const TitleContent = ({ text }) => {
    return (
        <div className={styles.container}>
            <hr />
            <h1>{text}</h1>
            <hr />
        </div>
    )
}

export default TitleContent