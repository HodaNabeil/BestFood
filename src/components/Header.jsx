import { useState } from "react";

import {NavLink} from 'react-router-dom'

function Header() {
const [link, setLink] =  useState(['Home', 'Services', 'About' ]);

const[openNav , setOpenNav] =useState(false);
const activeLink = ' text-[#f97316]  border-b-2  border-[#f97316]  border-solid        hidden    md:block  font-medium sm:text-[17px] md:text-[20px]    ';
const normalLink = 'text-[#777]    md:block  font-medium sm:text-[17px] md:text-[20px]   ' ;
  return (
    <header>
      <div className="  m-auto  max-w-[1640px] p-4 flex justify-between items-center ">
        {/* Logo */}
          <div className="flex items-center  "> 
            <p className='  font_2 top-[10px] text-[22px]   md:text-[30px] md:top-[50px]   lg:text-4xl  px-2'>
                Best <span className='  font_2 font-bold '> Eats</span>
            </p>
            <div className="  hidden sm:flex gap-x-[10px] items-center p-1  bg-gray-200 rounded-[50px]  text-sm">
              <p className=" bg-black text-white p-1 rounded-[50px] ">Delivery</p>
              <p className=" pr-1">Pickup</p>
            </div>
          </div>
            {/* Nav */}
          <nav   className=" " >
            <ul className= {` flex  z-[50] flex-col absolute  md:felx md:relative md:bg-transparent  left-0 w-full  bg-black text-white rounded-[6px] duration-500 transition-all   ease-linear   md:flex-row  p-8 md:p-0   gap-x-[15px] ${openNav ? 'top-[80px]' : 'top-[-100%]'} `}>
                {
                  link.map((link) => (
                    <li key={link}  className=" p-4 md:p-0"  >
                    <NavLink  to= {`/${link.toLowerCase()}`}    className= {({isActive}) => isActive  ? activeLink : normalLink}  >{link}</NavLink>
                    </li>
                  ))
                }
            </ul>
          </nav>
        {/* Card */} 
            <div className=" flex items-center justify-end gap-x-1">
                  <button className=' bg-black text-white  flex gap-x-1 items-center justify-center text-center p-2  rounded-full w-[90px] '>
                  <ion-icon name="cart" className='text-[20px] p-1 ' ></ion-icon> Card
                  </button>
                  <div  onClick={ ()=> setOpenNav(!openNav)}     className=" md:hidden  text-[30px]  font-medium p-[5px]  flex justify-center items-center cursor-pointer ">
                  <ion-icon name= {openNav ? 'close' : 'menu'} ></ion-icon>
                  </div>
            </div>
          
      </div>
      
    </header>
  )
}

export default Header
