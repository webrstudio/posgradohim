import Link from 'next/link';
import styles from './styles.module.css';

export const NavBar = () => {
    return (
        <header className={styles.headerWrapper}>
            <nav className={`${styles.navWrapper} largeContainer`}>
                <Link href='/' className={styles.navLogo}>
                    <img src='/assets/images/logo/gob-logo.webp' />
                </Link>
                <ul className={styles.navList}>
                    <li>
                        <Link href='/'>Inicio</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}