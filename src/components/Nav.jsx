
import {NavLink} from 'react-router-dom'

import React, { useState } from 'react';

const Nav = ({openNav , setOpenNav}) => {
  const [link, setLink] =  useState(['Home', 'Services', 'About' ]);
  const activeLink = ' text-[#f97316]  border-b-2  border-[#f97316]  border-solid   hidden    md:block  font-medium sm:text-[17px] md:text-[20px]    ';
const normalLink = 'text-[#777]    md:block  font-medium sm:text-[17px] md:text-[20px]   ' ;

  return (
    <nav  >
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
  );
}

export default Nav;
