import Image from "next/image";
import logoYeshiva from '../../../public/logoYeshiva.svg'
import { SiGoogleforms } from "react-icons/si";
import Link from 'next/link';

const SignLink = () =>{
    return (
        <>
          <div className="relative bg-slate-800">
            <div className="grid place-items-center bg-[url(/img/pattern.svg)] bg-cover bg-center px-4 md:px-10 py-20 text-center">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                FORMA PARTE DE AQUELLOS QUE
              </h2>
              <h2 className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
                CONQUISTAN SU FUTURO
              </h2>
              <p className="text-neutral-400 font-bold pt-4 pb-6 text-base sm:text-lg max-w-xl">
                Aprende, trasciende y empieza a cumplir tus sueños.
              </p>
              <Link href="/academic">
              <button className="bg-yellow-500 px-6 py-3 font-bold rounded-md cursor-pointer hover:bg-yellow-400 text-base sm:text-lg">
                PLANES Y BECAS
              </button>
              </Link> 
              <Image
                className="pt-10"
                width={80}
                height={80}
                alt="Logo Yeshiva"
                src={logoYeshiva}
              />
            </div>
            <button className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 bg-yellow-500 hover:bg-yellow-400 rounded-full p-3 sm:p-4 text-3xl sm:text-4xl cursor-pointer">
              <SiGoogleforms />
            </button>
        </div>
        </>
    )
}
export default SignLink;