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
                        <Link href={option.link} key={i} className={`${styles.optionCard} boxShadow borderRadius`}>
                            {option.title}
                        </Link>
                    ))
                }
                <a
                    href='/assets/documents/reglamento-pasantes-y-MIP.pdf'
                    className={`${styles.optionCard} boxShadow borderRadius`}
                    target='_blank'
                >
                    Reglamento para pregrado y médicos internos de pregrado
                </a>
                <a
                    href='/assets/documents/reglamento-residentes-2025.pdf'
                    className={`${styles.optionCard} boxShadow borderRadius`}
                    target="_blank"
                >
                    Reglamento para médicos residentes
                </a>
                <a
                    href='/assets/documents/reglamento-rotantes-2025.pdf'
                    className={`${styles.optionCard} boxShadow borderRadius`}
                    target='_blank'
                >
                    Reglamento para médicos residentes en rotación
                </a>
                <a
                    href=''
                    className={`${styles.optionCard} boxShadow borderRadius`}
                    target='_blank'
                >
                    Lineamientos para rotación clínica en el HIMFG
                </a>
                <a
                    href='/assets/images/oferta-academica/oferta-academica.png'
                    className={`${styles.optionCard} boxShadow borderRadius`}
                    target='_blank'
                >
                    Oferta educativa
                </a>
            </div>
        </Container>
    )
}