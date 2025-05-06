
import Image from "next/image";

import logoYeshiva from '../../../public/logoYeshiva.svg'
import Card from "../commons/Card";
import SectionTitle from "../commons/SectionTitle";
import { SiGoogleforms } from "react-icons/si";

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
          <SectionTitle title={'OFERTA ACADÉMICA'}/>
          {/* <div>
            <div className="relative inline-block">
              <h2 className="text-slate-900 text-3xl"></h2>
              <div className="absolute left-0 -bottom-1 h-1.5 w-full bg-yellow-500 rounded-4xl"></div>
            </div>
            <div className="h-0.5  bg-neutral-400 rounded-4xl"></div>
          </div> */}
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
            <div className="relative bg-slate-800">
              <div className="grid place-items-center bg-[url(/img/pattern.svg)] pt-15 pb-15">
                <h2 className="text-white text-5xl font-bold">FORMA PARTE DE AQUELLOS QUE</h2>
                <h2 className="text-yellow-500 text-5xl font-bold">CONQUISTAN SU FUTURO</h2>
                <p className="text-neutral-400 font-bold pt-5 pb-5" >Aprende, trasciende y empieza a cumplir tus sueños.</p>
                <button className="bg-yellow-500 p-3 font-bold rounded-md cursor-pointer hover:bg-yellow-400">
                  PLANES Y BECAS
                </button>
                <Image
                  className="pt-10"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                  src={logoYeshiva}
                />
              </div>
              <button className='absolute bottom-10 right-10 bg-yellow-500 hover:bg-yellow-400 rounded-full p-4 text-4xl cursor-pointer'>
                <SiGoogleforms />
              </button>
            </div>
          </div>
        </div>
    </>)
}

export default AcademicOffer;