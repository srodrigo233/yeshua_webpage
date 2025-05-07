
import Card from "../commons/Card";
import SectionTitle from "../commons/SectionTitle";

import imageDoctor from '../../../public/img/medico.jpg'

const AcademicOffer = () =>{
    const academicOffer = ['Carreras', 'Cursos', 'Capacitaciones'];
    const dataCarreras = [
      {
        careerName: "Enfermeria",
        description: "Licenciatura en auxiliar de enfermeria",
        image: imageDoctor
      },
      {
        careerName: "Emergencias y urgencias médicas",
        description: "Técnico superior en emergencias y urgenc...",
        image: imageDoctor
      },
      {
        careerName: "Nombre carrera",
        description: "Grado Academico",
        image: imageDoctor
      }
    ]

    return(
      <>
        <div className="p-10">
          <SectionTitle size={4} title={'OFERTA ACADÉMICA'}/>
          {/* <div>
            <div className="relative inline-block">
              <h2 className="text-slate-900 text-3xl"></h2>
              <div className="absolute left-0 -bottom-1 h-1.5 w-full bg-yellow-500 rounded-4xl"></div>
            </div>
            <div className="h-0.5  bg-neutral-400 rounded-4xl"></div>
          </div> */}
          <div>
            <div className="mt-8 ml-3 mb-3 relative inline-block">
              {academicOffer.map((el, id)=>(
                <div key={id} className=" relative inline-block mr-5">
                  <h2 className="text-slate-900 text-2xl font-bold">{el}</h2>
                  <div className="absolute left-0 -bottom-1 h-1.5 w-full bg-yellow-500 rounded-4xl"></div>
                </div>
              ))}
              <div className="h-0.5 bg-neutral-400 rounded-4xl"></div>
            </div>

            <div className=" mb-5">
              <div className="grid grid-cols-3">
                {
                  dataCarreras.map((el, ind)=>(
                    <Card
                      key={ind}
                      cardTitle={el.careerName}
                      carDescription={el.description}
                      cardImage={el.image}
                      isNews={false}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
    </>)
}

export default AcademicOffer;