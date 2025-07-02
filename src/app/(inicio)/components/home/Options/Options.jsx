import Link from "next/link"
import { options } from "./const"
import styles from './styles.module.css'
import { Container } from "@/app/components/common"

export const Options = () => {
    return (
        <Container>
            <h1 className='title'>Elige una opción</h1>
            <div className={`${styles.optionsWrapper} smallContainer`}>
                {
                    options.map((option, i) => (
                        <Link href='/' key={i} className={`${styles.optionCard} boxShadow borderRadius`}>
                            {option.title}
                        </Link>
                    ))
                }
            </div>
        </Container>
    )
}