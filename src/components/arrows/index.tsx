import { IoIosArrowUp } from "react-icons/io";


export default function Arrows() {
 return (
    <div className='flex flex-col items-center justify-center relative opacity-60 animationUp'>
    <span className='absolute'><IoIosArrowUp size={20} color='white' /></span>
    <span className='flex-1'><IoIosArrowUp size={20} color='white'  /></span>
    <span className='flex-1'><IoIosArrowUp size={20} color='white'  /></span>
  </div>

 );
}