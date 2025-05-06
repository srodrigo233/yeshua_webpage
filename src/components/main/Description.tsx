const Description = () =>{
    const description = 'En Yeshiva, nos dedicamos a ofrecer una educación de excelencia, enfocándonos en ayudar a cada estudiante a desarrollar su máximo potencial. Al ser parte de SHEMAYISRRAEL S.R.L., contamos con el respaldo de recursos como un centro médico privado, lo que nos permite ofrecer experiencias prácticas únicas. Nuestra metodología se basa en combinar lo académico con el aprendizaje práctico y la mentoría personalizada. Las instalaciones están pensadas para que cada estudiante aproveche al máximo su formación. Con nuestro lema "Impulsando sueños, creando oportunidades", estamos aquí para acompañarte en tu camino hacia el éxito.';
    return(
        <div className="p-10 m-6 shadow-lg rounded-lg neutral-100">
            <p className="">
              {description}
            </p>
            <p className="pt-6 text-red-500">
              Contamos con resolución ministerial Nº
            </p>
          </div>
    )
}
export default Description;