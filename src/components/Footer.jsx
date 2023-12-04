
import FooterColOne from "./FooterColOne";
import FooterColThree from "./FooterColThree";
import FooterColTwo from "./FooterColTwo";
import InputFooter from "./InputFooter";
import { useState } from "react";



function Footer() {
  return (
    <footer className=" max-w-[1640px] m-auto p-6 mt-4 bg-[#e5e7eb] 
        grid  md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 ">
      <FooterColOne/>
      <FooterColTwo/>
      <FooterColThree/>
      <InputFooter/>
    </footer>
  )
}

export default Footer
