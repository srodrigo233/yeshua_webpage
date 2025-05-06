
import Image from "next/image";

import logoYeshiva from '../../../public/logoYeshiva.svg'
import Card from "../commons/Card";

const AcademicOffer = () =>{
    const academicOffer = ['Carreras', 'Cursos', 'Capacitaciones'];
    const dataCarreras = [
      {
        careerName: "Enfermeria",
        description: "Licenciatura en auxiliar de enfermeria"
      },
      {
        careerName: "Emergencias y urgencias médicas",
        description: "Técnico superior en emergencias y urgenc..."
      },
      {
        careerName: "Nombre carrera",
        description: "Grado Academico"
      }
    ]


    return(
      <>
        <div>
          <div>
            <div className="relative inline-block">
              <h2 className="text-slate-900 text-3xl">OFERTA ACADÉMICA</h2>
              <div className="absolute left-0 -bottom-1 h-1.5 w-full bg-yellow-500 rounded-4xl"></div>
            </div>
            <div className="h-0.5  bg-neutral-400 rounded-4xl"></div>
          </div>
          <div>
            <div className="mt-5 relative inline-block">
              {academicOffer.map((el, id)=>(
                <div key={id} className=" relative inline-block mr-5">
                  <h2 className="text-slate-900 text-2xl">{el}</h2>
                  <div className="absolute left-0 -bottom-1 h-1.5 w-full bg-yellow-500 rounded-4xl"></div>
                </div>
              ))}
              <div className="h-0.5  bg-neutral-400 rounded-4xl"></div>
            </div>
            <div className="grid grid-cols-3">
              {
                dataCarreras.map((el, ind)=>(
                  <Card
                    key={ind}
                    careerName={el.careerName}
                    desc={el.description}
                  />
                ))
              }


            </div>
            <div className="bg-[url(/img/pattern.svg)]">
              <h2 className="text-white text-5xl">FORMA PARTE DE AQUELLOS</h2>
              <h2 className="text-yellow-200 text-5xl">CONQUISTAN SU FUTURO</h2>
              <a>Aprende, trasciende y empieza a cumplir tus sueños.</a>
              <button >
                PLANES Y BECAS
              </button>
              <Image 
                width={50}
                height={50}
                alt="Picture of the author"
                src={logoYeshiva}
              />
            </div>
          </div>
        </div>
    </>)
}

export default AcademicOffer;