import Image from "next/image";

import paramedic from '../../../../public/img/paramedic.jpg'
import SectionTitle from "@/components/commons/SectionTitle";

import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export default async function Page({ params,}: { params : Promise<{ slug: string }>}) 
{ 
  const { slug } = await params;

  const careerInfo = {
    title: "EMERGENCIAS Y URGENCIAS MÉDICAS",
    area: "Salud",
    level: "Técnico superior",
    duration: "3 años",
    system: "Anual sistema modular",
    schedules: [],
    titleLabel: "Técnico superior en emergencias y urgencias médicas",
    curriculum: 'link/to/pdf'
  }

  const whyStudyThis =[
    `Estudiar la carrera de Emergencias y Urgencias Médicas es una decisión que no solo abre las puertas a una profesión desafiante, sino también profundamente gratificante. Los técnicos en emergencias médicas juegan un rol crucial en la atención sanitaria de urgencia, siendo los primeros en intervenir en situaciones críticas y de emergencia, como accidentes, desastres naturales y otras crisis que ponen en peligro la vida.`,

    `El técnico en emergencias médicas está capacitado para proporcionar atención inmediata y eficaz en momentos en los que cada segundo cuenta. Esta habilidad es vital tanto en ambulancias como en hospitales o en el mismo lugar de los hechos. La capacidad de diagnosticar, estabilizar y brindar tratamiento básico o avanzado a los pacientes en estos momentos decisivos puede marcar la diferencia entre la vida y la muerte.`,

    `Uno de los aspectos más destacados de esta carrera es su carácter dinámico y diverso. Las situaciones que enfrenta un técnico en emergencias médicas son únicas y requieren de un alto nivel de preparación, adaptabilidad y habilidad para trabajar bajo presión. Cada día presenta nuevos desafíos que requieren de conocimientos actualizados sobre técnicas de reanimación, atención prehospitalaria, manejo de trauma, y mucho más.`,

    `Además, el trabajo en emergencias médicas no solo requiere conocimientos técnicos, sino también habilidades humanas esenciales, como la empatía, el trabajo en equipo y la toma de decisiones rápidas y efectivas. En este sentido, esta carrera también fomenta el desarrollo personal, ya que los profesionales deben ser capaces de manejar situaciones emocionalmente intensas, con respeto y sensibilidad hacia las víctimas y sus familias.`,

    'Estudiar Emergencias y Urgencias Médicas es una forma de contribuir activamente a la salud y el bienestar de la comunidad, con el respaldo de una formación integral que combina la teoría y la práctica en entornos reales. Esta formación, que incluye la capacitación en primeros auxilios, manejo de equipos de emergencia y técnicas avanzadas de atención, prepara a los estudiantes para afrontar los retos de un sector en constante evolución.'
  ]

  const workArea = [
    {
        title: "Servicios de ambulancia",
        description: "Trabajan en equipos de paramédicos en ambulancias, respondiendo a emergencias médicas en el lugar del incidente y transportando a los pacientes a hospitales."
    },
    {
        title: "Hospitales y clínicas de urgencias",
        description: "Apoyan en las áreas de urgencias, brindando primeros auxilios y asistencia a pacientes en situaciones críticas bajo la supervisión de médicos."
    },
    {
        title: "Empresas de salud privada",
        description: "Algunas compañías privadas de salud contratan técnicos para cubrir eventos, deportes o situaciones laborales de alto riesgo, ofreciendo atención inmediata en caso de emergencia."
    },
    {
        title: "Servicios de rescate y atención prehospitalaria",
        description: "Colaboran con equipos de rescate, como bomberos o grupos de respuesta rápida, en situaciones de desastre, accidentes o rescates en terrenos difíciles."
    },
    {
        title: "Instituciones educativas y deportivas",
        description: "Trabajan en instituciones educativas, universidades o en eventos deportivos, brindando primeros auxilios en situaciones de emergencia."
    },
    {
        title: "Industrias de transporte y aviación",
        description: "Ofrecen atención médica a bordo de aviones, barcos o trenes, asegurándose de que los pasajeros reciban atención en caso de emergencias durante el viaje."
    },
    {
        title: "Asistencia en eventos masivos o conciertos",
        description: "Ofrecen atención médica inmediata en grandes conciertos, festivales o eventos públicos, donde puede haber incidentes que requieran primeros auxilios."
    },
  ]


//   const EstadisticsComponent = () =>{
//     return(
        
//     )

//   }

  return (
    
    <>
        <div className="relative w-full h-[50vh]">
          <Image
            style={{ objectFit: 'cover' }}
            className="w-full h-full brightness-50"
            alt="Portada"
            src={paramedic}
          />
        </div>

        <div className="flex flex-wrap">
            <div className="max-w-5xl mx-auto basis-2/3">
                <div className="flex items-center text-slate-500 font-bold text-2xl cursor-pointer ml-10 mt-5">   
                    <MdKeyboardDoubleArrowLeft /> Volver a la oferta académica
                </div>
                <div className="m-10">
                    <SectionTitle title={careerInfo.title} size={4}/>
                    <div className="mt-5 mx-4">
                        <div><a className="font-bold">Área de formación: </a> {careerInfo.area}</div>
                        <div><a className="font-bold">Nivel de formación: </a> {careerInfo.level}</div>
                        <div><a className="font-bold">Duración: </a> {careerInfo.area}</div>
                        <div><a className="font-bold">Régimen de estudio: </a> {careerInfo.area}</div>
                        <div><a className="font-bold">Horarios: </a> {}</div>
                        <div><a className="font-bold">Título profesional: </a> {careerInfo.titleLabel}</div>
                        <div><a className="font-bold">Malla curricular: </a> <a>PDF</a></div>
                    </div>

                </div>
                <div className="m-10">
                    <SectionTitle title={`POR QUÉ ESTUDIAR LA CARRERA`} size={4}/>
                    <div className="mt-6 mx-4 text-justify">
                        {whyStudyThis.map((par, ind)=>(
                            <p key={ind} className="mb-3">{par}</p>
                        ))}
                    </div>
                </div>
                <div className="m-10">
                    <SectionTitle title={`ÁREA DE TRABAJO`} size={4}/>
                    <div className="mt-6 mx-4">
                        <ul key={123} className="list-disc list-inside text-gray-800" >
                            {workArea.map((par, ind)=>(
                                <li key={ind} className="py-2">
                                    <a className="font-bold">{par.title}</a>
                                    <p className="ml-6">{par.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="basis-1/3">
                <div>
                    <div>Carreras relacionadas</div>
                </div>
                <div>
                    <div>Estadísticas de interés </div>

                    <div className="bg-neutral-300 py-10 w-3/5 rounded-2xl">
                        <div className='relative'>
                            <div className={'absolute top-2 left-2  w-4 h-4 bg-neutral-400 rounded-full'}></div> 
                            <div className='flex-none pl-12 pb-5'>
                                <p className="font-bold">Crecimiento del empleo:</p>
                                <p>6% (2021-2031)</p>
                                <p>(Según la Oficina de Estadísticas Laborales de EE.UU.)</p>
                            </div>
                        </div>

                        <div className='relative'>
                            <div className={'absolute top-2 left-2 w-4 h-4 bg-neutral-400 rounded-full'}></div> 
                            <div className='flex-none pl-12 pb-5'>
                                <p className="font-bold">Demanda en España</p>
                                <p>6% (2021-2031)</p>
                                <p>(Según la Oficina de Estadísticas Laborales de EE.UU.)</p>
                            </div>
                        </div>

                        <div className='relative'>
                            <div className={'absolute top-2 left-2  w-4 h-4 bg-neutral-400 rounded-full'}></div> 
                            <div className='flex-none pl-12 pb-5'>
                                <p className="font-bold">Demanda en el sector:</p>
                                <p>Una de las mas altas</p>
                            </div>
                        </div>


                    </div>
                </div>

                        
                            
            </div>
        </div>
    </>
    )
}