import React, { FC } from 'react';
import SectionTitle from "../commons/SectionTitle";

const events = [

    {
        date: 'dd/mm/aaaa',
        title: 'Curso práctico de Inyectables y Venoclisis',
        banner: 'public/image.png'
    },
    {
        date: 'dd/mm/aaaa',
        title: 'Presente en la rueda de negocios de la ICAM',
        banner: 'public/image.png'
    },
    {
        date: 'dd/mm/aaaa',
        title: 'Presente en el día del peatón',
        banner: 'public/image.png'
    }

]

interface EventDetailProps{
    date:string,
    title:string,
    isActive: boolean
}

const EventDetail:FC<EventDetailProps> = ({date, title, isActive}) => {
    return(
        <div>
            <p className='h-5 text-yellow-500'>{date}</p>
            <div> <div className='w-7 h-7 bg-blue-800 rounded-full'></div> {title}</div>
        </div>
    )
}

const Events = () =>{
    return(
        <>
            <SectionTitle title="Eventos"/>
            <div>
                <div>
                    {events.map((el, id)=>(
                        <EventDetail key={id} date={el.date} title={el.title} isActive/>
                    ))}
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}
export default Events;