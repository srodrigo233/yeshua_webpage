
const AcademicOffer = () =>{
    const academicOffer = ['Carreras', 'Cursos', 'Capacitaciones'];
    return(<>
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
              {/* <Image src={}> */}
              {/* </Image> */}
            </div>
          </div>
        </div>
    </>)
}

export default AcademicOffer;