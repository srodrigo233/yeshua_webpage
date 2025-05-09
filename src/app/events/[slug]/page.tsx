import Image from "next/image";
import SectionTitle from "@/components/commons/SectionTitle";

import eventBanner from '../../../../public/img/eventBanner.png'
import Card from "@/components/commons/Card";

import eventPicture from '../../../../public/img/eventPicture.jpg';

export default async function Page({ params,}: { params : Promise<{ slug: string }>}) 
{ 
  const { slug } = await params;

  const linkEvents =[
    {
        label:"Seminarios",
        link:''
    },
    {
        label:"Exposiciones",
        link:''
    },
    {
        label:"Encuentros",
        link:''
    },
    {
        label:"Ferias",
        link:''
    },
  ]

  const signLinks = [
    {
        label:'INSCRIBIRME',
        link: ''
    },
    {
        label:'ANOTAR EN TU CALENDARIO',
        link: ''
    },
  ]

  const eventData = {
    title : "CURSO PRÁCTICO DE INYECTABLES Y VENOCLISIS",
    dateDesc: "14 y 21 de marzo",
    schedules: [
        {
            groupLabel: 'Grupo 1',
            initialHour: '9:00',
            finalHour: '13:00'
        },
        {
            groupLabel: 'Grupo 2',
            initialHour: '14:00',
            finalHour: '18:00'
        }
    ],
    location: 'Av. América #839 entre Pando y Melchor Urquidi, Edif. Torre América Norte (lado ICE NORTE) , planta baja - of.2',
    cost:150,
    addressedTo: 'Estudiantes de salud y publico mayor de 21 años.',
    organization: 'YESHIVA • Instituto Tecnologico Alianza',
    contact:[{
        name:'Alejandra Maldonado',
        phoneNumber: '76420527',
        email:'administracion@shemayisrael.com' 
    }],
    relatedEvents:[
        {
            eventTitle:'Curso práctico de suturas',
            evenImage:eventPicture,
            eventLinkPath:''
        }
    ]
  }

  const classForLabel = `font-bold pr-5`
  const classForSlugData = `pb-9 align-top`
  const classForTableSpacing = `m-5  border-separate border-spacing-y-3 `

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
        
        <div className="flex flex-wrap">
            <div className="basis-2/3">
                <div className="flex justify-between text-xs mb-5">
                    <a className="font-bold content-center">Volver a la lista de eventos</a>
                    <div className="flex">
                        {linkEvents.map((elem, ind)=>(
                            <button
                                key={ind}
                                className="px-4 py-1 mx-1 font-bold text-blue-950 bg-white border-2 border-blue-950 rounded-lg hover:bg-blue-900 hover:text-white transition"
                            >{elem.label}</button>
                        ))}
                    </div>
                </div>

                <div className="pt-5">
                    <SectionTitle title={eventData.title} size={4}/>                       
                
                    <table className={classForTableSpacing}>
                        <tbody>
                            <tr className={classForSlugData}>
                                <td className={classForLabel}>Fecha:</td>
                                <td>{eventData.dateDesc}</td>
                            </tr>

                            <tr className={classForSlugData}>
                                <td className={classForLabel}>Hora:</td>
                                <td>{eventData.schedules.map((el, ind)=>(<p key={ind}>{el.groupLabel} - {el.initialHour} • {el.finalHour}</p>))}</td>
                            </tr>

                            <tr className={classForSlugData}>
                                <td className={classForLabel}>Lugar:</td>
                                <td>{eventData.location}</td>
                            </tr>

                            <tr className={classForSlugData}>
                                <td className={classForLabel}>Inversión:</td>
                                <td>Bs.- {eventData.cost}</td>
                            </tr>

                            <tr className={classForSlugData}>
                                <td className={classForLabel}>Dirigido a:</td>
                                <td>{eventData.addressedTo}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="grid grid-cols-2 place-content-between gap-4">
                    {signLinks.map((el, ind)=>(
                        <button
                            key={ind} 
                            className="px-4 py-1 text-sm font-bold cursor-pointer text-blue-950 bg-white border-2 border-blue-950 rounded-lg hover:bg-blue-900 hover:text-white transition"
                        >{el.label}</button> 
                    ))}
                </div>
                <Image
                    className="pt-10"
                    // width={100}
                    // height={50}
                    alt="Picture of the author"
                    src={eventBanner}
                />
                <table className={classForTableSpacing}>
                    <tbody>
                        <tr className={classForSlugData}>
                            <td className={classForLabel}>Organiza:</td>
                            <td>{eventData.organization}</td>
                        </tr>
                        <tr className={classForSlugData}>
                            <td className={classForLabel}>Contacto:</td>
                            <td>{eventData.contact.map((el, ind)=>(
                                <div key={ind}>
                                    <div>{el.name}</div>
                                    <div>{el.phoneNumber}</div>
                                    <div>{el.email}</div>
                                </div>))}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            

            <div className="basis-1/3 p-10">
                <div>
                    <h2 className="font-bold">Eventos relacionados</h2>
                    {
                        eventData.relatedEvents.map((el, ind)=>(
                            <Card
                                key={ind}
                                cardTitle={el.eventTitle}
                                carDescription={''}
                                cardImage={el.evenImage}
                                variant="event"
                            />)
                        )
                    }
                    
                </div>
            </div>
        </div>
    </div>
    )
}