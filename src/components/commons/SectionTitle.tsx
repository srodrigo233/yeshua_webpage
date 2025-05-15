'use client';

import Link from 'next/link';
import React, { FC } from 'react';

interface SectionTitleProps {
  title: string;
  size: number;
  linkTo?: string; // ← Enlace opcional
}

const SectionTitle: FC<SectionTitleProps> = ({ title, size, linkTo }) => {
  const Heading = (
    <h2 className={`text-slate-900 text-${size}xl font-bold`}>
      {title}
    </h2>
  );

  return (
    <div>
      <div className="relative inline-block">
        {linkTo ? (
          <Link href={linkTo} className="group transition-colors duration-200">
            {Heading}
            <div className="absolute left-0 -bottom-1 h-1.5 w-full bg-yellow-500 rounded-4xl transition-all group-hover:bg-yellow-400"></div>
          </Link>
        ) : (
          <>
            {Heading}
            <div className="absolute left-0 -bottom-1 h-1.5 w-full bg-yellow-500 rounded-4xl"></div>
          </>
        )}
      </div>
      <div className="h-0.5 bg-neutral-400 rounded-4xl" />
    </div>
  );
};

export default SectionTitle;
