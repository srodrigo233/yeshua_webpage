'use client'

import SectionTitle from "../commons/SectionTitle";


import InfiniteCarousel from "./InfiniteCarousel";

const AcademicOffer = () =>{
    const academicOffer = ['Carreras', 'Cursos', 'Capacitaciones'];
    
    return(
      <>
        
        <div className="mx-10">
          <SectionTitle size={4} title={'OFERTA ACADÉMICA'}/>
          {/* <div>
            <div className="relative inline-block">
              <h2 className="text-slate-900 text-3xl"></h2>
              <div className="absolute left-0 -bottom-1 h-1.5 w-full bg-yellow-500 rounded-4xl"></div>
            </div>
            <div className="h-0.5  bg-neutral-400 rounded-4xl"></div>
          </div> */}
          <div>
            <div className="mt-8 ml-3 mb-3 relative inline-block">
              {academicOffer.map((el, id)=>(
                <div key={id} className=" relative inline-block mr-5">
                  <h2 className="text-slate-900 text-2xl font-bold">{el}</h2>
                  <div className="absolute left-0 -bottom-1 h-1.5 w-full bg-yellow-500 rounded-4xl"></div>
                </div>
              ))}
              <div className="h-0.5 bg-neutral-400 rounded-4xl"></div>
            </div>

            <div className=" mb-5">

              <InfiniteCarousel/>
              {/* <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
                <div
                  className={`flex transition-transform duration-1000 ease-in-out`}
                  style={{
                    transform: isSliding ? 'translateX(-33.3333%)' : 'translateX(0%)',
                  }}
                >
                  {cards.slice(0, 4).map((card, id) => (
                    <div key={id} className="w-1/3 p-4 flex-shrink-0">
                      <div className="bg-white rounded-lg shadow p-6 h-full">
                        <h2 className="text-xl font-bold">{card.careerName}</h2>
                        <p className="mt-2 text-gray-600">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              

              {/* <div className="grid grid-cols-3">
                {
                  cards.map((el, ind)=>(
                    <Card
                      key={ind}
                      cardTitle={el.careerName}
                      carDescription={el.description}
                      cardImage={el.image}
                      isNews={false}
                    />
                  ))
                }
              </div> */}
            </div>
          </div>
        </div>
    </>)
}

export default AcademicOffer;