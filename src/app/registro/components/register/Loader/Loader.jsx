import styles from './styles.module.css'

export const Loader = ()=>{
    return (
        <section className={styles.loaderWrapper}>
            <div className={styles.loader}></div>
        </section>
    )
}