import React, { FC } from 'react';

interface CardProps{
    careerName: string
    desc:String
}

const Card:FC<CardProps> = ({careerName, desc})=> {
    return(
        <div className="relative h-90 bg-amber-200 p-3 m-3 rounded-2xl shadow-2xl">
            <div className='absolute bottom-5 left-5 pr-9'>
                <div className='text-2xl font-bold'>{careerName}</div>
                <div>{desc}</div>
            </div>
            <button className='absolute bottom-5 right-5 bg-yellow-500 rounded-full'>---</button>
        </div>
    )
}
export default Card;