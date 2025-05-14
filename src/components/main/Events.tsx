'use client'

import React, { FC, useEffect, useState } from 'react';
import SectionTitle from "../commons/SectionTitle";
import Image  from 'next/image';

import ilustration1 from '../../../public/img/ilustration1.png'
import ilustration2 from '../../../public/img/ilustration2.png'
import ilustration3 from '../../../public/img/ilustration3.png'

import { GoArrowRight } from "react-icons/go";

const events = [

    {
        date: 'dd/mm/aaaa',
        title: 'Curso práctico de Inyectables y Venoclisis',
        banner: ilustration1,
        isActive: true,
    },
    {
        date: 'dd/mm/aaaa',
        title: 'Presente en la rueda de negocios de la ICAM',
        banner: ilustration2,
        isActive: true,
    },
    {
        date: 'dd/mm/aaaa',
        title: 'Presente en el día del peatón',
        banner: ilustration3,
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
    // banner: StaticImageData,
    isActive: boolean
}

const EventDetail:FC<EventDetailProps> = ({date, title, isActive}) => {

    return(
        <div className='relative flex'>
            <div className={`absolute bottom-5 flex-1 w-5 h-5 ${isActive? 'bg-blue-900': 'bg-neutral-400' }  rounded-full`}></div> 
            <div className='flex-none pl-12 pb-5'>
                <p className='h-5 text-yellow-500'>{date}</p>
                <h2 className={`font-bold md:text-2xl ${isActive? 'text-blue-900': 'text-neutral-400' }`}>{title}</h2>
            </div>
        </div>     
    )
}

const Events = () =>{

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
        <div className="px-4 md:px-10 mt-5 max-w-screen-xl mx-auto">
            <SectionTitle size={4} title="EVENTOS"/>
            <div className='pl-2 mt-8'>
                <div className='relative flex flex-col'>
                    {/* <div className='absolute bottom-0 flex-1 left-3 w-0.5 mt-1 bg-neutral-400 z-0'></div> */}
                    
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='w-full md:basis-2/3'>
                            {events.map((el, id)=>(
                                <EventDetail 
                                    key={id} 
                                    date={el.date} 
                                    title={el.title} 
                                    isActive={id === currentIndex}
                                    // banner={el.banner}
                                />
                            ))}
                        </div>

                        <div className='w-1/2 md:basis-1/3 sm:basis-1/4 p-2 md:p-5'>
                            <Image
                                alt='Event banner'
                                src={events[currentIndex].banner}
                            />
                        </div>
                    </div>
                        
                    <div className='flex items-center gap-4 mt-4 md:mt-6'>
                        <button className='bg-yellow-500 rounded-full p-2 text-2xl cursor-pointer'>
                            <GoArrowRight/>
                        </button>
                        <h2 className={'font-bold text-blue-900 text-lg'}>Ir al calendario de eventos</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Events;