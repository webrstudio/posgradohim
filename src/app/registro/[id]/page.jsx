import { Container } from "@/app/components/common"
import { RegisterForm } from "../components/register"

export default function({params}){
    return (
        <Container>
            <h2 className='title'>Registro {params.id}</h2>
            <RegisterForm id={params.id}/>
        </Container>
    )
}

export async function generateStaticParams() {
  return [
    { id: "servicio-social" },
    { id: "estancias-estadias-tesis-practicas-rotantes" },
    { id: "medicos-rotantes-internos-pregrado"}
  ];
}

export const metadata = {
    title: "Registro",
    description: "Registro",
  };