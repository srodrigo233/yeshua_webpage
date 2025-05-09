import SectionTitle from "../commons/SectionTitle";
import Card from "../commons/Card";

import { GoArrowRight } from "react-icons/go";

import imageDoctor from '../../../public/img/medico.jpg'

const newsData = [
    {
        title: "Titulo",
        description: "Lorem ipsum",
        image: imageDoctor
        
    },
    {
        title: "Nueva técnica reduce errores en medicación",
        description: "Un protocolo innovador disminuye en 30% los errores en enfermería.",
        image: imageDoctor
    },
    {
        title: "Urgencias colapsadas por aumento de pacientes",
        description: "Hospitales reportan esperas de hasta 12 horas por saturación.",
        image: imageDoctor
    },
    {
        title: "Descubren biomarcador para cáncer de páncreastulo",
        description: "Nueva proteína mejora la detección temprana de este cáncer.",
        image: imageDoctor
    },
    {
        title: "Aumentan enfermedades renales en el mundo",
        description: "Expertos alertan que 10% de la población sufre daño renal.",
        image: imageDoctor
    },
    {
        title: "Realidad virtual revoluciona anatomía patológica",
        description: "Simuladores 3D mejoran el estudio de tejidos y diagnósticos.",
        image: imageDoctor
    }
]
const News = ()=>{
    return(
        <div className="px-10">
            <SectionTitle size={4} title="NOTICIAS"/>

            <div className="flex flex-row mt-5">
                <div className="basis-2/4">
                    <Card
                        key={1}
                        cardTitle={newsData[0].title}
                        carDescription={newsData[0].description}
                        cardImage={newsData[0].image}
                        variant='news'
                    />
                </div>
                <div className="basis-1/4">
                    <Card
                        key={2}
                        cardTitle={newsData[1].title}
                        carDescription={newsData[1].description}
                        cardImage={newsData[1].image}
                        variant='news'
                    />
                </div><div className="basis-1/4">
                    <Card
                        key={3}
                        cardTitle={newsData[2].title}
                        carDescription={newsData[2].description}
                        cardImage={newsData[2].image}
                        variant='news'
                    />
                </div>
                                
            </div>
            <div className="flex flex-row">
                <div className="basis-1/4">
                    <Card
                        key={1}
                        cardTitle={newsData[3].title}
                        carDescription={newsData[3].description}
                        cardImage={newsData[3].image}
                        variant='news'
                    />
                </div>
                <div className="basis-1/4">
                    <Card
                        key={2}
                        cardTitle={newsData[4].title}
                        carDescription={newsData[4].description}
                        cardImage={newsData[4].image}
                        variant='news'
                    />
                </div><div className="basis-2/4">
                    <Card
                        key={3}
                        cardTitle={newsData[5].title}
                        carDescription={newsData[5].description}
                        cardImage={newsData[5].image}
                        variant='news'
                    />
                </div>
            </div>
            <div className='flex mt-5 mb-7'>
                <button className='bg-yellow-500 rounded-full p-2 text-2xl cursor-pointer'>
                    <GoArrowRight/>
                </button>
                <h2 className={' self-center font-bold text-1xl text-blue-900 pl-5'}>Ir al blog de noticias</h2>
            </div>
            {/* <div className="grid grid-flow-col grid-rows-3 gap-1 py-5">
                {
                    newsData.map((el, ind)=>(
                        <Card 
                            key={ind}
                            cardTitle={el.title}
                            carDescription={el.description}
                            cardImage={el.image}
                        />
                    ))
                }
            </div> */}
        </div>
    )
}
export default News;
