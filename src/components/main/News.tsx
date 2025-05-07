import SectionTitle from "../commons/SectionTitle";
import Card from "../commons/Card";


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
        <>
            <SectionTitle title="Noticias"/>
            <div className="grid grid-flow-col grid-rows-3 gap-1">
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
            </div>
        </>
    )
}
export default News;
