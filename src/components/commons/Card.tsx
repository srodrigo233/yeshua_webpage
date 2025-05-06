import React, { FC } from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";
interface CardProps{
    cardTitle: string
    carDescription:String
    cardImage:StaticImageData
}

const Card:FC<CardProps> = ({cardTitle, carDescription, cardImage})=> {
    return(
        <div className="relative h-90 bg-amber-200 p-3 m-3 rounded-2xl overflow-hidden shadow-2xl">
            <Image
                fill
                style={{ objectFit: 'cover' }}
                className="brightness-50"
                alt="Picture of the author"
                src={cardImage}
            />
            <div className='absolute bottom-5 left-5 pr-9'>
                <div className='text-2xl font-bold text-white'>{cardTitle}</div>
                <div className='text-white'>{carDescription}</div>
            </div>
            <button className='absolute bottom-5 right-5 bg-yellow-500 rounded-full p-2 text-3xl'>
                <GoArrowRight/>
            </button>
        </div>
    )
}
export default Card;