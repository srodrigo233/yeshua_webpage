import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { GoArrowRight } from 'react-icons/go';

interface CardProps {
  cardTitle: string;
  carDescription?: string;
  cardImage?: StaticImageData;
  date?: string;
  variant: 'news' | 'otherNotices' | 'event'| 'beca'| 'newsmainpage';
}

const variantStyles = {
  news: {
    height: 'h-100',
    titleSize: 'text-2xl',
    showDescription: true,
    showDate: false,
    showButton: true,
  },
  event: {
    height: 'h-75',
    titleSize: 'text-2xl',
    showDescription: true,
    showDate: true,
    showButton: true,
  },
  otherNotices: {
    height: 'aspect-square',
    titleSize: 'text-base',
    showDescription: false,
    showDate: false,
    showButton: false,
  },
  beca:{
    height: 'aspect-square',
    titleSize: 'text-2xl',
    showDescription: false,
    showDate: false,
    showButton: true,
  },
  newsmainpage: {
    height: 'h-75',
    weight: 'w-150',
    titleSize: 'text-xl',
    showDescription: true,
    showDate: false,
    showButton: true,
  },
};

const Card: FC<CardProps> = ({ cardTitle, carDescription, cardImage, date, variant }) => {
  const {
    height,
    titleSize,
    showDescription,
    showDate,
    showButton,
  } = variantStyles[variant];

  return (
    <div className={`relative p-3 m-2 rounded-2xl overflow-hidden shadow-1xl ${height}`}>
      {cardImage && (
        <Image
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-50"
          alt="Card image"
          src={cardImage}
        />
      )}

      <div className="absolute bottom-5 left-5 pr-9">
        <div className={`font-bold text-white ${titleSize}`}>{cardTitle}</div>

        {showDescription && (
          <div className="text-white text-sm">
            {showDate && date && <div className="text-yellow-400">{date}</div>}
            {carDescription}
          </div>
        )}
      </div>

      {showButton && (
        <button className="absolute bottom-5 right-5 bg-yellow-500 rounded-full p-2 text-3xl">
          <GoArrowRight />
        </button>
      )}
    </div>
  );
};

export default Card;
