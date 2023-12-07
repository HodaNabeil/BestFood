
import {NavLink} from 'react-router-dom'

import React, { useState } from 'react';

const Nav = ({openNav , setOpenNav}) => {
  const activeElement = ' text-[#f97316]   border-b-2  border-[#f97316]  border-solid   hidden  md:block  font-medium sm:text-[17px] md:text-[20px]    ';

  const normalElement = 'text-[#777]  md:block  font-medium sm:text-[17px] md:text-[20px]   ' ;
    const links = [
      { name: "Home", to: "/" },
      { name: "Services", to: "/services" },
      { name: "About", to: "/about" },
    ];
    const [activeLink, setActiveLink] = useState("Home");
    const hundleActiveLinks = (link) => {
      setActiveLink(link);
      
    };

  return (
    <nav  >
            <ul className= {`  md:top-0 flex  z-[50] flex-col absolute  
              md:felx md:relative  bg-black  md:bg-transparent  left-0 w-full 
            text-white rounded-[6px] duration-500 transition-all  
              ease-linear   md:flex-row  p-8 md:p-0   gap-x-[15px]
              ${openNav ? '  top-[80px]' : 'top-[-100%]'}  transition-none duration-0     `}>
                  {
                  links.map((link, index) => (
                    <li key={index}  className=" p-4 md:p-0" 
                      onClick={() => hundleActiveLinks(link.name)}>
                      <NavLink
                        to={link.to.toLowerCase()}
                        className={activeLink === link.name ? activeElement: normalElement}
                        
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
            </ul>
          </nav>
  );
}

export default Nav;
