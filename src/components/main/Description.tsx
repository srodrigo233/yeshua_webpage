const Description = () => {
  const description = `En Yeshiva, nos dedicamos a ofrecer una educación de excelencia, enfocándonos en ayudar a cada estudiante a desarrollar su máximo potencial. Al ser parte de SHEMAYISRRAEL S.R.L., contamos con el respaldo de recursos como un centro médico privado, lo que nos permite ofrecer experiencias prácticas únicas.\nNuestra metodología se basa en combinar lo académico con el aprendizaje práctico y la mentoría personalizada. Las instalaciones están pensadas para que cada estudiante aproveche al máximo su formación. Con nuestro lema "Impulsando sueños, creando oportunidades", estamos aquí para acompañarte en tu camino hacia el éxito.`;

  return (
    <div className="px-7 py-10 m-4 md:m-6 shadow-2xl rounded-3xl bg-neutral-100 max-w-5xl mx-auto">
      {description.split('\n').map((line, index) => (
        <p
          key={index}
          className="text-sm md:text-base text-neutral-800 leading-relaxed mb-4 text-justify"
        >
          {line}
        </p>
      ))}
      <p className="pt-4 font-medium text-red-500 text-base md:text-lg text-justify">
        Contamos con resolución ministerial Nº
      </p>
    </div>
  );
};

export default Description;
