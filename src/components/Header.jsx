import { useState } from "react";
import { useSelector } from "react-redux";

import {NavLink} from 'react-router-dom'

import {Link} from 'react-router-dom'

function Header() {
const [link, setLink] =  useState(['Home', 'Services', 'About' ]);
const numberOrder = useSelector( (state) => state.order);


const[openNav , setOpenNav] =useState(false);
const activeLink = ' text-[#f97316]  border-b-2  border-[#f97316]  border-solid   hidden    md:block  font-medium sm:text-[17px] md:text-[20px]    ';
const normalLink = 'text-[#777]    md:block  font-medium sm:text-[17px] md:text-[20px]   ' ;
  return (
    <header >
      <div className="  m-auto  max-w-[1640px] p-4 flex justify-between items-center  ">
        {/* Logo */}
            <Link to={'/home'} className='  font_2 top-[10px] text-[22px]   md:text-[30px] md:top-[50px]   lg:text-4xl  px-2'>
                Best <span className='  font_2 font-bold '> Eats</span>
            </Link>
            {/* Nav */}
          <nav   className=" " >
            <ul className= {`  md:top-0 flex  z-[50] flex-col absolute  
              md:felx md:relative  bg-black  md:bg-transparent  left-0 w-full 
            text-white rounded-[6px] duration-500 transition-all  
              ease-linear   md:flex-row  p-8 md:p-0   gap-x-[15px]
              ${openNav ? '  top-[80px]' : 'top-[-100%]'}  transition-none duration-0     `}>
                {
                  link.map((link) => (
                    <li key={link}  className=" p-4 md:p-0"  >
                    <NavLink  to= {`/${link.toLowerCase()}`}  
                      className= {({isActive}) => isActive  ? activeLink : normalLink}  >
                        {link}
                    </NavLink>
                    </li>
                  ))
                }
            </ul>
          </nav>
        {/* Card */} 
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
          
      </div>
      
    </header>
  )
}

export default Header



