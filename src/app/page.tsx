
import Description from "@/components/main/Description";
import AcademicOffer from "@/components/main/AcademicOffer";
import News from "@/components/main/News";
import Events from "@/components/main/Events";
import Thoughts from "@/components/main/Thoughts";

import Image from "next/image";
import imageClassRoom from '../../public/img/classroom.jpg'

export default function Home() {

  const firstWord = 'Impulsando'
  const titlePortait = "sueños, creando oportunidades";
  
  return (
    <div className="grid items-center justify-items-center">
        <div className="relative w-full h-[50vh]">
          <Image
            style={{ objectFit: 'cover' }}
            className="w-full h-full brightness-50"
            alt="Portada"
            src={imageClassRoom}
          />
          <div className="max-w-5xl mx-auto">
            <div className="absolute bottom-2 bg-opacity-50 pl-15 pb-10">
              <div className="flex flex-row max-w-5xl mx-auto text-white text-3xl font-bold 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-md">
                <div className="relative inline-block mr-2 ">
                  {firstWord}
                  <div className="absolute left-0 bottom-7 h-1 w-full bg-yellow-500 rounded-4xl"></div>
                </div>
                {titlePortait}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 py-10">
          <Description/>
          <AcademicOffer/>
          <News/>
          <Events/>
          <Thoughts/>
        </div>
    </div>
  );
}
