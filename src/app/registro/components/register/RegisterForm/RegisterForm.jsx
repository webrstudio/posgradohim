'use client'
import 'animate.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useOnChange } from '@/hooks'
import styles from './styles.module.css'
import { Loader } from '../Loader/Loader'

export const RegisterForm = ({ id }) => {
    const { data, onChange, onLoading, isLoading } = useOnChange()
    const [password, setPassword] = useState(false)
    const onSubmit = async (evt) => {
        evt.preventDefault()
        if (onLoading) onLoading(true);
        console.log(data)
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API}/inscriptions/inscriptionLogin/index.php`,
                data
            )
            console.log(response)
            if(response.status===200){
                setPassword(true)
            }
        } catch (error) {
            setPassword(false)
        } finally {
            if (onLoading) onLoading(false);
        }
    }
    return (
        <>
            {isLoading && <Loader />}
            {
                !isLoading && password ?
                    <>
                        {
                            id === 'servicio-social' || id === 'estancias-estadias-tesis-practicas-rotantes' ?
                                <SocialServiceForm id={id} />
                                :
                                null
                        }
                        {
                            id === 'medicos-rotantes-internos-pregrado' || id === 'pregrado' ?
                                <InternShipForm id={id} />
                                :
                                null
                        }
                    </>
                    :
                    <form
                        onSubmit={onSubmit}
                        className={`${styles.codeFormWrapper} boxShadow borderRadius smallContainer`}
                    >
                        <span>Ingrese el código de acceso:</span>
                        <input
                            type='password'
                            required
                            name='codigo_acceso'
                            onChange={onChange}
                        />
                        <button className={styles.successButton}>
                            Ingresar
                        </button>
                    </form>
            }
        </>
    )
}

const SocialServiceForm = ({ id }) => {
    const { data, onChange, onReset, onLoading, isLoading } = useOnChange()
    return (
        <>
            {isLoading && <Loader />}
            <form
                className={`${styles.registerFormWrapper} largeContainer boxShadow borderRadius`}
                onSubmit={(e) => onSubmit(e, {
                    data: {
                        ...data,
                        categoria_id: id === 'servicio-social' ? 2 : 1,
                        onLoading: onLoading,
                        onReset: onReset
                    },
                    onLoading: onLoading,
                    onReset: onReset
                })}
            >
                <div>
                    <label>Área o departamento:</label>
                    <input
                        type='text'
                        name='estudiante_departamento'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>Fecha de inicio:</label>
                    <input
                        type='date'
                        name='estudiante_fecha_inicio'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Fecha de término:</label>
                    <input
                        type='date'
                        name='estudiante_fecha_termino'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Nombre:</label>
                    <input
                        type='text'
                        name='estudiante_nombre'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Edad:</label>
                    <input
                        type='number'
                        name='estudiante_edad'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Sexo:</label>
                    <select name='estudiante_genero' onChange={onChange} required>
                        <option value=''>Seleccione una opción</option>
                        <option value='Hombre'>Hombre</option>
                        <option value='Mujer'>Mujer</option>
                    </select>
                </div>
                <div>
                    <label>Estado civil:</label>
                    <input
                        type='text'
                        name='estudiante_estado_civil'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Fecha de nacimiento:</label>
                    <input
                        type='date'
                        name='estudiante_fecha_nacimiento'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>CURP:</label>
                    <input
                        type='text'
                        name='estudiante_curp'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Domicilio donde radica en la ciudad:</label>
                    <input
                        type='text'
                        name='estudiante_domicilio_temporal'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Domicilio permanente:</label>
                    <input
                        type='text'
                        name='estudiante_domicilio_permanente'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Código postal:</label>
                    <input
                        type='number'
                        name='estudiante_cp'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Alcaldía o municipio:</label>
                    <input
                        type='text'
                        name='estudiante_alcaldia'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Ciudad:</label>
                    <input
                        type='text'
                        name='estudiante_ciudad'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>País:</label>
                    <input
                        type='text'
                        name='estudiante_pais'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Teléfono particular:</label>
                    <input
                        type='number'
                        name='estudiante_telefono_particular'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Teléfono celular:</label>
                    <input
                        type='number'
                        name='estudiante_telefono_celular'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Correo electrónico:</label>
                    <input
                        type='email'
                        name='estudiante_correo'
                        required
                        onChange={onChange}
                    />
                </div>
                {
                    id !== 'estancias-estadias-tesis-practicas-rotantes' ? null
                        :
                        <>
                            <div>
                                <label>Motivo de registro:</label>
                                <select name='categoria_nombre' onChange={onChange} required>
                                    <option value=''>Seleccione una opción</option>
                                    <option value='Estancias'>Estancias</option>
                                    <option value='Estadías'>Estadías</option>
                                    <option value='Tesis'>Tesis</option>
                                    <option value='Prácticas'>Prácticas</option>
                                    <option value='Rotantes'>Rotantes</option>
                                    <option value='Verano de investigación'>Verano de investigación</option>
                                </select>
                            </div>
                        </>
                }
                <div>
                    <label>Escuela de procedencia:</label>
                    <input
                        type='text'
                        name='estudiante_escuela'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Carrera:</label>
                    <input
                        type='text'
                        name='estudiante_carrera'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Promedio de calificaciones (último ciclo escolar):</label>
                    <input
                        type='text'
                        name='estudiante_promedio'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Contacto de la escuela:</label>
                    <input
                        type='number'
                        name='estudiante_contacto_escuela'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Fotografía tamaño infantil a color o blanco y negro (únicamente archivos con extensión .jpg, .jpeg, .png):</label>
                    <input
                        type='file'
                        name='estudiante_fotografia'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Certificado de vacunación (COVID, varicela, influenza) (únicamente archivos con extensión .pdf):</label>
                    <input
                        type='file'
                        name='estudiante_certificado_vacunacion'
                        required
                        onChange={onChange}
                    />
                </div>
                {
                    id !== 'servicio-social' ? null
                        :
                        <>
                            <div>
                                <label>
                                    Copia de calificaciones de la carrera con sello original de la escuela (promedio mayor a 8.0) (únicamente archivos con extensión .pdf):
                                </label>
                                <input
                                    type='file'
                                    name='estudiante_copia_calificaciones'
                                    required
                                    onChange={onChange}
                                />
                            </div>
                            <div>
                                <label>
                                    Oficio de la escuela donde procede, solicitando llevar a cabo su servicio social (únicamente archivos con extensión .pdf):
                                </label>
                                <input
                                    type='file'
                                    name='estudiante_oficio_escuela'
                                    required
                                    onChange={onChange}
                                />
                            </div>
                            <div>
                                <label>Certificado médico de salud reciente (IMSS, ISSSTE, SSA, Cruz Roja, DIF), no se aceptan médicos, clínicas, hospitales particulares ni similares (únicamente archivos con extensión .pdf):</label>
                                <input
                                    type='file'
                                    name='estudiante_certificado_medico'
                                    required
                                    onChange={onChange}
                                />
                            </div>
                        </>
                }
                <div>
                    <button className={styles.successButton}>
                        Registrar
                    </button>
                    <button className={styles.deleteButton} type='reset' onClick={onReset}>
                        Eliminar campos
                    </button>
                </div>
            </form>
        </>
    )
}

const InternShipForm = ({ id }) => {
    const { data, onChange, onReset, onLoading, isLoading } = useOnChange()
    return (
        <>
            {isLoading && <Loader />}
            <form
                className={`${styles.registerFormWrapper} largeContainer boxShadow borderRadius`}
                onSubmit={(e) => onSubmit(e, {
                    data: {
                        ...data,
                        categoria_id: id === 'medicos-rotantes-internos-pregrado' ? 3 : 4,
                    },
                    onLoading: onLoading,
                    onReset: onReset
                })}
            >
                <div>
                    <label>Nombre:</label>
                    <input
                        type='text'
                        name='estudiante_nombre'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Nacionalidad:</label>
                    <input
                        type='text'
                        name='estudiante_nacionalidad'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Fecha de nacimiento:</label>
                    <input
                        type='date'
                        name='estudiante_fecha_nacimiento'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>CURP:</label>
                    <input
                        type='text'
                        name='estudiante_curp'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Especialidad:</label>
                    <input
                        type='text'
                        name='estudiante_especialidad'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Grado:</label>
                    <input
                        type='text'
                        name='estudiante_grado'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Institución procedente:</label>
                    <input
                        type='text'
                        name='estudiante_institucion_procedencia'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Teléfono y extensión de la jefatura de enseñanza:</label>
                    <input
                        type='text'
                        name='estudiante_extension_ensenanza'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Fecha de inicio de rotación:</label>
                    <input
                        type='date'
                        name='estudiante_fecha_inicio'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Fecha de término de rotación:</label>
                    <input
                        type='date'
                        name='estudiante_fecha_termino'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Servicio al que va rotar:</label>
                    <input
                        type='text'
                        name='estudiante_departamento'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Teléfono celular:</label>
                    <input
                        type='number'
                        name='estudiante_telefono_celular'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Teléfono local:</label>
                    <input
                        type='number'
                        name='estudiante_telefono_particular'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Domicilio permanente:</label>
                    <input
                        type='text'
                        name='estudiante_domicilio_permanente'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Correo electrónico:</label>
                    <input
                        type='email'
                        name='estudiante_correo'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Nombre de algún familiar (contacto de emergencia):</label>
                    <input
                        type='text'
                        name='estudiante_familiar_nombre'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Teléfono de contacto de emergencia:</label>
                    <input
                        type='number'
                        name='estudiante_familiar_telefono'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Fotografía tamaño infantil a color o blanco y negro (únicamente archivos con extensión .jpg, .jpeg, .png):</label>
                    <input
                        type='file'
                        name='estudiante_fotografia'
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Certificado de vacunación (COVID, varicela, influenza) (únicamente archivos con extensión .pdf):</label>
                    <input
                        type='file'
                        name='estudiante_certificado_vacunacion'
                        required
                        onChange={onChange}
                    />
                </div>
                {
                    id !== 'pregrado' ? null
                        :
                        <>
                            <div>
                                <label>Grupo:</label>
                                <input
                                    type='text'
                                    name='estudiante_grupo'
                                    required
                                    onChange={onChange}
                                />
                            </div>
                            <div>
                                <label>Tutor:</label>
                                <input
                                    type='text'
                                    name='estudiante_tutor'
                                    required
                                    onChange={onChange}
                                />
                            </div>
                            <div>
                                <label>Materia:</label>
                                <input
                                    type='text'
                                    name='estudiante_materia'
                                    required
                                    onChange={onChange}
                                />
                            </div>
                        </>
                }
                <div>
                    <button className={styles.successButton}>
                        Registrar
                    </button>
                    <button className={styles.deleteButton} type='reset' onClick={onReset}>
                        Eliminar campos
                    </button>
                </div>
            </form>
        </>
    )
}

const onSubmit = async (evt, { data, onLoading, onReset }) => {
    evt.preventDefault();

    if (onLoading) onLoading(true);

    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
    });

    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API}/inscriptions/addNewInscription/index.php`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );

        await Swal.fire({
            title: response.data.message || "Registro exitoso",
            icon: 'success',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });

        // Solo resetea si todo salió bien
        if (onReset) onReset();
        evt.target.reset();

    } catch (error) {
        const errorMessage =
            error.response?.data?.error ||
            (error.response?.status === 409 ? "Ya existe un CURP registrado" : null)

        await Swal.fire({
            title: "¡Ha ocurrido un error!",
            text: errorMessage,
            icon: 'error',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    } finally {
        if (onLoading) onLoading(false);
    }
};