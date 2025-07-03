import styles from './styles.module.css'

export const RegisterForm = ({ id }) => {
    if (id === 'servicio-social' || id === 'estancias-estadias-tesis-practicas-rotantes') {
        return (
            <SocialServiceForm id={id} />
        )
    }
    if (id === 'medicos-rotantes-internos-pregrado') {
        return (
            <InternShipForm />
        )
    }
}

const SocialServiceForm = ({ id }) => {
    return (
        <form className={`${styles.registerFormWrapper} largeContainer boxShadow borderRadius`}>
            <div>
                <label>Área o departamento:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Fecha de inicio:</label>
                <input type='date' name='' required />
            </div>
            <div>
                <label>Fecha de término:</label>
                <input type='date' name='' required />
            </div>
            <div>
                <label>Nombre:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Edad:</label>
                <input type='number' name='' required />
            </div>
            <div>
                <label>Sexo:</label>
                <select>
                    <option>Hombre</option>
                    <option>Mujer</option>
                </select>
            </div>
            <div>
                <label>Estado civil:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Fecha de nacimiento:</label>
                <input type='date' name='' required />
            </div>
            <div>
                <label>Domicilio donde radica en la ciudad:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Domicilio permanente:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Código postal:</label>
                <input type='number' name='' required />
            </div>
            <div>
                <label>Alcaldía o municipio:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Ciudad:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>País:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Teléfono particular:</label>
                <input type='number' name='' required />
            </div>
            <div>
                <label>Teléfono celular:</label>
                <input type='number' name='' required />
            </div>
            <div>
                <label>Correo electrónico:</label>
                <input type='email' name='' required />
            </div>
            <div>
                <label>Escuela de procedencia:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Carrera:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Promedio de calificaciones (último ciclo escolar):</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Contacto de la escuela:</label>
                <input type='number' name='' required />
            </div>
            <div>
                <label>Fotografía tamaño infantil a color o blanco y negro:</label>
                <input type='file' name='' required />
            </div>
            <div>
                <label>Certificado de vacunación (COVID, viruela, influenza):</label>
                <input type='file' name='' required />
            </div>
            {
                id !== 'servicio-social' ? null
                    :
                    <>
                        <div>
                            <label>
                                Copia de calificaciones de la carrera con sello original de la escuela (promedio mayor a 8.0):
                            </label>
                            <input type='file' name='' required />
                        </div>
                        <div>
                            <label>
                                Oficio de la escuela donde procede, solicitando llevar a cabo su servicio social:
                            </label>
                            <input type='file' name='' required />
                        </div>
                    </>
            }
            <div>
                <button className={styles.successButton}>
                    Registrar
                </button>
                <button className={styles.deleteButton} type='reset'>
                    Eliminar campos
                </button>
            </div>
        </form>
    )
}

const InternShipForm = () => {
    return (
        <form className={`${styles.registerFormWrapper} largeContainer boxShadow borderRadius`}>
            <div>
                <label>Fecha:</label>
                <input type='date' name='' required />
            </div>
            <div>
                <label>Nombre:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Nacionalidad:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Fecha de nacimiento:</label>
                <input type='date' name='' required />
            </div>
            <div>
                <label>Especialidad:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Grado:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Institución procedente:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Teléfono y extensión de la jefatura de enseñanza:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Fecha de inicio de rotación:</label>
                <input type='date' name='' required />
            </div>
            <div>
                <label>Fecha de término de rotación:</label>
                <input type='date' name='' required />
            </div>
            <div>
                <label>Servicio al que va rotar:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Teléfono celular:</label>
                <input type='number' name='' required />
            </div>
            <div>
                <label>Teléfono local:</label>
                <input type='number' name='' required />
            </div>
            <div>
                <label>Domicilio permanente:</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Correo electrónico:</label>
                <input type='email' name='' required />
            </div>
            <div>
                <label>Nombre de algún familiar (contacto de emergencia):</label>
                <input type='text' name='' required />
            </div>
            <div>
                <label>Teléfono de contacto de emergencia:</label>
                <input type='number' name='' required />
            </div>
            <div>
                <label>Fotografía tamaño infantil a color o blanco y negro:</label>
                <input type='file' name='' required />
            </div>
            <div>
                <button className={styles.successButton}>
                    Registrar
                </button>
                <button className={styles.deleteButton} type='reset'>
                    Eliminar campos
                </button>
            </div>
        </form>
    )
}