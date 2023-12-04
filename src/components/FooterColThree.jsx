import { useState } from "react";


function FooterColThree() {
  const [helpLinks ,setHelpLinks] =useState([ 
    "Services",
    "Supports",
    "Terms & Condition ",
    "Privacypolicy"
  ]);

  return (
    <div className="top-[20px] relative p-2">
    <h3 className="   text-[#f97316]  font-medium md:text-[18px] "> HelpFulLinks</h3>
    <ul className=" top-[10px] relative text-[#777] text-[15px] leading-[1.6]">
      {
        helpLinks.map((link) => {
          return (
              <li key={link}>
                <a  
                className=" hover:text-[#f97316] 
                transition-all  duration-300   hover:pl-2  "  
                href={`/${link.toLowerCase()}`}>
                  {link}
                </a>
              </li>
          )
        })
      }
    </ul>


  </div>
  )
}

export default FooterColThree
