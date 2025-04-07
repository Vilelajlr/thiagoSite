
import { FaWhatsapp } from "react-icons/fa";
import Slider from "../slider";
import Team from "../team";

export default function Resultados() {
 return (
   <section id='resultados' className='w-full h-[100dvh] flex flex-col items-center justify-center relative'>

        <div className="flex flex-col items-center justify-center gap-20  w-full h-full z-10 pt-10 pb-10">
            <div className="">
                <h1 className="text-white fontePrincipal font-bold text-xl text-center md:text-3xl">Alguns <span className="text-green-600">RESULTADOS</span> dos alunos da consultoria </h1>
            </div>
            
            <Slider />
           
            <div className=' w-full flex flex-col gap-5 items-center justify-end'>
                    <a
                    href='https://wa.me/5534998363232?text=Fala%20Thiago%2C%20tudo%20bem%3FTenho%20interesse%20na%20sua%20consultoria.'
                    className='bg-[#16DB65] flex items-center justify-center p-4 rounded-[10px] font-bold fontePrincipal gap-3 hover:text-white delay-75 transition-colors duration-300 ease-in-out'
                    >
                    <FaWhatsapp size={30} />
                    FAÇA PARTE DO TIME
                    </a>
            </div>
        </div>

        <div className="absolute w-full h-[100dvh] bg-black -z-20">

            <div className="absolute flex items-center justify-center gap-5 w-full h-[100dvh] -z-10">
                <div className="relative w-full h-full overflow-hidden   flex justify-center">
                    
                    <Team color="text-[#16DB65]" fontSize="md:text-[200px]" mdFontSize="text-[150px]" opacity="opacity-20" top="top-0" rotate="rotate-[20deg]" />
                    <Team color="text-transparent" fontSize="md:text-[200px]" mdFontSize="text-[150px]" opacity="opacity-50" top="top-6" rotate="-rotate-[20deg]" stroke="stroke-2" strokeWidth="stroke-gray-300" />



                    <Team color="text-[#16DB65]" fontSize="md:text-[200px]" mdFontSize="text-[150px]" opacity="opacity-20" top="top-60" rotate="rotate-[20deg]" />
                    <Team color="text-transparent" fontSize="md:text-[200px]" mdFontSize="text-[150px]" opacity="opacity-50" top="top-80" rotate="-rotate-[20deg]" stroke="stroke-2" strokeWidth="stroke-gray-300" />



                    <Team color="text-[#16DB65]" fontSize="md:text-[200px]" mdFontSize="text-[150px]" opacity="opacity-20" top="top-130" rotate="rotate-[20deg]" />
                    <Team color="text-transparent" fontSize="md:text-[200px]" mdFontSize="text-[150px]" opacity="opacity-50" top="top-150" rotate="-rotate-[20deg]" stroke="stroke-2" strokeWidth="stroke-gray-300" />
                    

                    
                </div>
            </div>
        </div>

        

   </section>
 );
}