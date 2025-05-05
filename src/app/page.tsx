import Image from "next/image";

export default function Home() {

  const titlePortait = "Impulsando suenios, creando oportunidades";
  const description = 'En Yeshiva, nos dedicamos a ofrecer una educación de excelencia, enfocándonos en ayudar a cada estudiante a desarrollar su máximo potencial. Al ser parte de SHEMAYISRRAEL S.R.L., contamos con el respaldo de recursos como un centro médico privado, lo que nos permite ofrecer experiencias prácticas únicas. Nuestra metodología se basa en combinar lo académico con el aprendizaje práctico y la mentoría personalizada. Las instalaciones están pensadas para que cada estudiante aproveche al máximo su formación. Con nuestro lema "Impulsando sueños, creando oportunidades", estamos aquí para acompañarte en tu camino hacia el éxito.';

  const academicOffer = ['Carreras', 'Cursos', 'Capacitaciones'];

  return (
    <div 
      // className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <div>This is the header</div>
      {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"> */}

        {/* Portada */}
        <div className="bg-blue-500 h-90">
          {titlePortait}
        </div>

        {/* Body */}
        <div>
          {/* 
            - descripcion
            - oferta academica
            - acceso a planes becas
            - noticias 
            - eventos
            - opiniones
           */}
          
          {/* Descripcion */}
          <div className="p-10 m-6 shadow-lg rounded-lg neutral-100">
            <p className="">
              {description}
            </p>
            <p className="pt-6 text-red-500">
              Contamos con resolución ministerial Nº
            </p>
          </div>

          {/* Oferta academica */}
          <div>
            {/* Titulo */}
            <div> 
              <h2>OFERTA ACADEMICA</h2>
              <div>
                <div>
                  {academicOffer.map((el, id)=>(
                    <a className="mr-5">{el}</a>
                  ))}
                </div>
                <div>
                  {/* carrousel */}
                </div>
                {/* banner */}
                <div>
                  <h2>FORMA PARTE DE AQUELLOS</h2>
                  <h2>CONQUISTAN SU FUTURO</h2>
                  <a>Aprende, trasciende y empieza a cumplir tus sueños.</a>
                  <button>
                    PLANES Y BECAS
                  </button>
                  <Image src={}>

                  </Image>
                </div>
              </div>
            </div>

          </div>
        </div>
        
      {/* </main> */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        This is the footer
      </footer>
    </div>
  );
}
