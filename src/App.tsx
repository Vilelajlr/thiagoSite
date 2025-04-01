import imgThiago from './assets/thiagoDesktop.webp';
import { FaWhatsapp } from "react-icons/fa";
import Arrows from './components/arrows';
import Resultados from './components/resultados';



function App() {
 

  return (
    <main className='w-full min-h-[100dvh] flex flex-col items-center justify-center'>
        
          <div className='w-full h-[100dvh] flex flex-col items-center justify-center'>
            <div className='absolute w-full h-[100dvh] bg-gradient-to-b from-[#0000006c] to-[#000000] z-[-10px]'></div>
            <img
              src={imgThiago}
              alt="Foto do Thiago Vilela"
              className='w-full h-full object-cover z-[-10px]'
            />
            <div className='absolute w-full h-[100dvh] flex flex-col gap-10 items-center justify-center'>
              <div className=' flex flex-col items-center justify-center'>
                <h1 className='text-3xl absolute top-6 text-white fonteNome font-bold '>
                    THIAGO VILELA
                </h1>
                <div className='w-[225px] h-[4px] bg-white absolute top-15 z-50'></div>
              </div>
              <div className='flex flex-col items-center justify-center gap-5 absolute top-100 md:top-140 '>
            
                <div className='z-50'>
                  <a
                    href='https://wa.me/5534998363232?text=Fala%20Thiago%2C%20tudo%20bem%3FTenho%20interesse%20na%20sua%20consultoria.'
                    className='bg-[#16DB65] flex items-center justify-center p-4 rounded-[10px] font-bold fontePrincipal gap-3 hover:text-white delay-75 transition-colors duration-300 ease-in-out'
                  >
                  <FaWhatsapp size={30} />
                  FAÇA PARTE DO TIME
                  </a>
                </div>
              </div>
            
              <section className='flex items-end justify-center gap-5 absolute bottom-5'>
                <Arrows />
                  
                    <a href='#resultados' className='text-lg text-white opacity-70 fontePrincipal font-semibold hover:opacity-100 delay-100 transition-opacity duration-200 ease-in-out z-60 cursor-pointer'>Veja os Resultados</a>
                  
                <Arrows />
            
              </section>
            </div>
          </div>


          <Resultados />



    </main>
  )
}

export default App
