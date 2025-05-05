import Image from "next/image";
import Description from "@/components/main/Description";
import AcademicOffer from "@/components/main/AcademicOffer";

export default function Home() {

  const titlePortait = "Impulsando suenios, creando oportunidades";
  

  return (
    <div 
      // className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"> */}

        {/* Portada */}
        <div className="bg-blue-500 h-90">
          {titlePortait}
        </div>

        {/* Body */}
        <div>
          <Description/>
          <AcademicOffer/>
        </div>
        
      {/* </main> */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        This is the footer
      </footer>
    </div>
  );
}
