import styles from './styles.module.css';

export const Container = ({ children }) => {
    return (
        <section className={styles.containerWrapper}>
            {children}
        </section>
    )
}