
import { FaWhatsapp } from "react-icons/fa";
import Slider from "../slider";
import Team from "../team";

export default function Resultados() {
 return (
   <section id='resultados' className='w-full h-screen flex flex-col items-center justify-center'>

        <div className="absolute w-full h-[100dvh] bg-black">


            <div className="absolute flex items-center justify-center gap-5 w-full h-screen">
                <div className="relative w-full h-full overflow-hidden   flex justify-center">
                    
                    <Team color="text-[#16DB65]" fontSize="md:text-[200px]" mdFontSize="text-8xl" opacity="opacity-20" top="top-0" rotate="rotate-[20deg]" />


                    <Team color="text-transparent" fontSize="md:text-[200px]" mdFontSize="text-8xl" opacity="opacity-50" top="top-6" rotate="-rotate-[20deg]" stroke="stroke-2" strokeWidth="stroke-gray-300" />

                    <Team color="text-[#16DB65]" fontSize="md:text-[200px]" mdFontSize="text-8xl" opacity="opacity-20" top="top-60" rotate="rotate-[20deg]" />


                    <Team color="text-transparent" fontSize="md:text-[200px]" mdFontSize="text-8xl" opacity="opacity-50" top="top-58" rotate="-rotate-[20deg]" stroke="stroke-2" strokeWidth="stroke-gray-300" />

                    <Team color="text-[#16DB65]" fontSize="md:text-[200px]" mdFontSize="text-8xl" opacity="opacity-20" top="top-130" rotate="rotate-[20deg]" />


                    <Team color="text-transparent" fontSize="md:text-[200px]" mdFontSize="text-8xl" opacity="opacity-50" top="top-150" rotate="-rotate-[20deg]" stroke="stroke-2" strokeWidth="stroke-gray-300" />
                    

                    
                    
                </div>
            </div>

            <div className="absolute w-full h-screen flex flex-col items-center justify-center gap-5">
                <Slider />
            </div>

            <div className='z-50 absolute w-full h-screen flex flex-col gap-5 items-center justify-end bottom-20 md:bottom-10'>
                <a
                href='https://wa.me/5534998363232?text=Fala%20Thiago%2C%20tudo%20bem%3FTenho%20interesse%20na%20sua%20consultoria.'
                className='bg-[#16DB65] flex items-center justify-center p-4 rounded-[10px] font-bold fontePrincipal gap-3 hover:text-white delay-75 transition-colors duration-300 ease-in-out'
                >
                <FaWhatsapp size={30} />
                FAÇA PARTE DO TIME
                </a>
            </div>


        </div>

   </section>
 );
}