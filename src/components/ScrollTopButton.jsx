
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
    <div  className=" scrollTop">
      {
        scrollTop &&   <ion-icon name="arrow-up-outline" onClick={()=> scroolUp()}></ion-icon>             
      
      }
    </div>
  )
}

export default ScrollTopButton
