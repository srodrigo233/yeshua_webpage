import React, { FC } from 'react';
interface SectionTitleProps{
    title: string
    size:number
}

const SectionTitle:FC<SectionTitleProps> = ({title, size}) =>{
    return(
        <div>
            <div className="relative inline-block">
                <h2 className={`text-slate-900 text-${size}xl font-bold`}>{title}</h2>
                <div className="absolute left-0 -bottom-1 h-1.5 w-full bg-yellow-500 rounded-4xl"></div>
            </div>
            <div className="h-0.5  bg-neutral-400 rounded-4xl"></div>
        </div>
    )
}

export default SectionTitle;