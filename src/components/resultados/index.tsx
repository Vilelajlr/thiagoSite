
import { FaWhatsapp } from "react-icons/fa";
import Slider from "../slider";
import imgPage2 from "../../assets/imgPage2.png";

import { BsFillArrowDownSquareFill } from "react-icons/bs";


export default function Resultados() {
 return (
   <section id='resultados' className='w-full h-[100dvh] flex flex-col items-center justify-center relative'>

        <div className="flex flex-col items-center justify-center gap-20  w-full h-full z-10 pt-10 pb-10">
            <div className="">
                <h1 className="text-white fontePrincipal font-bold text-xl text-center md:text-3xl leading-8">Alguns <span className="text-green-950 bg-green-200 p-1">RESULTADOS</span> dos alunos da consultoria <span className="inline-block ml-1"><BsFillArrowDownSquareFill color="lightgreen" size={25} /> </span> </h1> 
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
                    <img src={imgPage2} alt="" className="object-cover w-full opacity-[20%]" />

                </div>
            </div>
        </div>

        

   </section>
 );
}