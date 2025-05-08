'use client'

import React, { FC, useEffect, useState } from 'react';
import SectionTitle from "../commons/SectionTitle";

const events = [

    {
        date: 'dd/mm/aaaa',
        title: 'Curso práctico de Inyectables y Venoclisis',
        banner: 'public/image.png',
        isActive: true,
    },
    {
        date: 'dd/mm/aaaa',
        title: 'Presente en la rueda de negocios de la ICAM',
        banner: 'public/image.png',
        isActive: true,
    },
    {
        date: 'dd/mm/aaaa',
        title: 'Presente en el día del peatón',
        banner: 'public/image.png',
        isActive: false,
    },
    // {
    //     date: 'dd/mm/aaaa',
    //     title: 'Presente en el día del peatón',
    //     banner: 'public/image.png',
    //     isActive: false,
    // },{
    //     date: 'dd/mm/aaaa',
    //     title: 'Presente en el día del peatón',
    //     banner: 'public/image.png',
    //     isActive: false,
    // }

]

interface EventDetailProps{
    date:string,
    title:string,
    banner: string,
    isActive: boolean
}

const EventDetail:FC<EventDetailProps> = ({date, title, banner, isActive}) => {

    return(
        <div className='relative flex'>
            <div className={`absolute bottom-5 flex-1 w-7 h-7 ${isActive? 'bg-blue-900': 'bg-neutral-400' }  rounded-full`}></div> 
            <div className='flex-none pl-12 pb-5'>
                <p className='h-5 text-yellow-500'>{date}</p>
                <h2 className={`font-bold text-2xl ${isActive? 'text-blue-900': 'text-neutral-400' }`}>{title}</h2>
            </div>
        </div>     
    )
}

const Events = () =>{

    // const [isActive, setIsActive] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(()=>{
        const interval = setInterval(() => {
            setTimeout(() => {
              setCurrentIndex((prev) => (prev + 1) % events.length);
            }, 300); 
          }, 3000);
          return () => clearInterval(interval);
    }, [])

    return(
        <div className="px-10 mt-5">
            <SectionTitle size={4} title="EVENTOS"/>
            <div className='pl-10 mt-8'>
                <div className='relative flex flex-col'>
                    <div className='absolute bottom-0 flex-1 left-3 w-0.5 mt-1 bg-neutral-400 z-0'></div>

                    <div className=''>
                        {events.map((el, id)=>(
                            <EventDetail 
                                key={id} 
                                date={el.date} 
                                title={el.title} 
                                isActive={id === currentIndex}
                                banner={el.banner}
                            />
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Events;