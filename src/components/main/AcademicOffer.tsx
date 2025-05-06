
import Image from "next/image";

import logoYeshiva from '../../../public/logoYeshiva.svg'

const AcademicOffer = () =>{
    const academicOffer = ['Carreras', 'Cursos', 'Capacitaciones'];
    return(<>
        {/* Titulo */}
        <div> 
          <h2>OFERTA ACADEMICA</h2>
          <div>
            <div>
              {academicOffer.map((el, id)=>(
                <a key={id} className="mr-5">{el}</a>
              ))}
            </div>
            <div>
              {/* carrousel */}
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