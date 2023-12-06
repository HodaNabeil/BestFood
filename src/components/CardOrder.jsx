
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'


function CardOrder({setOpenNav ,openNav}) {
  const numberOrder = useSelector( (state) => state.order);
  return (
    <div className=" flex items-center justify-end gap-x-1  relative">
                  
    <Link to={'/menuorder'} className=' bg-black text-white 
      flex gap-x-1 items-center justify-center text-center p-2 
      rounded-full w-[90px] '>
      <span className=" absolute left-[10px] top-[-1px] text-[12px] md:text-[13px]  
        bg-[#f97316] text-white  rounded-[50%] w-[20px] h-[20px]">  {numberOrder.length}</span>
      <ion-icon name="cart"
      className='text-[30px]   p-1 '  ></ion-icon> 
    </Link>
    <div  onClick={ ()=> setOpenNav(!openNav)} 
      className=" md:hidden  text-[30px]  font-medium p-[5px] 
      flex justify-center items-center cursor-pointer ">
    <ion-icon name= {openNav ? "close": 'menu'} ></ion-icon>
    </div>
</div>
  )
}

export default CardOrder
