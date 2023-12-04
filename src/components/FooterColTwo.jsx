import { useState } from "react"


function FooterColTwo() {
  const [information ,setInformation] =useState([
    "About Us",
    "More Search",
    "Blog",
    "Testimonals"
])
  return (
    <div className="top-[20px] relative p-2 ">
        <h3 className="   text-[#f97316]  font-medium md:text-[18px] ">information </h3>
        <ul className=" top-[10px] relative text-[#777] text-[15px] leading-[1.6]">
          {
            information.map((info)=> {
              return (
                <li key={info}>
                  <a  className=" hover:text-[#f97316]  
                  transition-all  duration-300   hover:pl-2  "  
                  href={`/${info.toLowerCase()}`} >
                    {info}
                  </a>
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default FooterColTwo
