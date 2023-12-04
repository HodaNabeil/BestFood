import { BsArrowUp } from "react-icons/bs";
import { useState,useEffect } from "react";


function ScrollTopButton() {

  const [scrollTop, setScrollTop] = useState(false);
  useEffect(()=> {
    window.addEventListener('scroll' , ()=> {
    if(window.scrollY > 100) {
      setScrollTop(true)
    }else {
      setScrollTop(false)
    }
    })
  },[]);

  const scroolUp =()=> {
    window.scrollTo({
      top:0 ,
      behavior:'smooth'
    })
  } 
  return (
    <div>
      {
        scrollTop &&  <BsArrowUp  className=" w-[40px] h-[40px] rounded-[50px] text-[#fff] bg-[#f97316]  cursor-pointer font-bold z-40  fixed right-7  bottom-[40px]  p-2 text-[20px]"  size={20} onClick={()=> scroolUp()}  />           
      
      }
    </div>
  )
}

export default ScrollTopButton
