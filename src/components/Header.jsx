import { useState } from "react";

import Nav from "./Nav";
import Logo from "./Logo";
import CardOrder from "./CardOrder";

function Header() {

const[openNav , setOpenNav] =useState(false);
  return (
    <header >
      <div className="  m-auto  max-w-[1640px] p-4 flex justify-between items-center  ">
            <Logo/>
            <Nav   openNav={openNav} setOpenNav={setOpenNav}/>
          <CardOrder openNav={openNav}  setOpenNav={setOpenNav} />
      </div>
      
    </header>
  )
}

export default Header



