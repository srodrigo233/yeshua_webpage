import Description from "@/components/main/Description";
import AcademicOffer from "@/components/main/AcademicOffer";
import News from "@/components/main/News";
import Events from "@/components/main/Events";
import Thoughts from "@/components/main/Thoughts";
import SignLink from "@/components/main/SignLink";

import Image from "next/image";
import imageClassRoom from '../../public/img/classroom.jpg'

export default function Home() {

  const firstWord = 'Impulsando sueños, '
  const titlePortait = "creando oportunidades";
  
  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative w-full h-[30vh] md:h-[50vh]">
        <Image
          alt="Portada"
          src={imageClassRoom}
          fill
          className="object-cover w-full h-full brightness-50"
        />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 md:px-10 pb-10">
          <div className="max-w-5xl mx-auto text-white text-xl sm:text-2xl md:text-3xl font-bold flex flex-wrap">
            <div className="relative inline-block mr-2">
              {firstWord}
              <div className="absolute left-0 bottom-7 md:bottom-10 h-1 w-full bg-yellow-500 rounded-full"></div>
            </div>
            {titlePortait}
          </div>
        </div>
      </div>

      {/* Main Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-5">
        <Description />
        <AcademicOffer />
      </div>

      {/* Call to Action */}
      <div>
        <SignLink />
      </div>

      {/* News, Events, Thoughts */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-10">
        <News />
        <Events />
        <Thoughts />
      </div>
    </div>
  );
}
