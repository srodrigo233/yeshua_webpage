import Image from "next/image";
import logoYeshiva from '../../../public/logoYeshiva.svg'
import { SiGoogleforms } from "react-icons/si";

const SignLink = () =>{
    return (
        <>
            <div className="relative bg-slate-800">
              <div className="grid place-items-center bg-[url(/img/pattern.svg)] pt-15 pb-15">
                <h2 className="text-white text-5xl font-bold">FORMA PARTE DE AQUELLOS QUE</h2>
                <h2 className="text-yellow-500 text-5xl font-bold">CONQUISTAN SU FUTURO</h2>
                <p className="text-neutral-400 font-bold pt-5 pb-5" >Aprende, trasciende y empieza a cumplir tus sueños.</p>
                <button className="bg-yellow-500 p-3 font-bold rounded-md cursor-pointer hover:bg-yellow-400">
                  PLANES Y BECAS
                </button>
                <Image
                  className="pt-10"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                  src={logoYeshiva}
                />
              </div>
              <button className='absolute bottom-10 right-10 bg-yellow-500 hover:bg-yellow-400 rounded-full p-4 text-4xl cursor-pointer'>
                <SiGoogleforms />
              </button>
            </div>
        </>
    )
}
export default SignLink;