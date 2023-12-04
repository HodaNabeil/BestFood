

import { useState } from "react";

function NewProduct() {
  const [profood,setProfood] =useState([
    {
    id:1,
    title : "'Sun's Out, BOGO's Out",
    details: "Through 8/26 " ,
    img:'https://i.pinimg.com/564x/56/7e/f1/567ef19990be92e906bfa5aeed167f68.jpg'
  },
  {
    id:2,
    title: "New Restaurants",
    details: "Added Daily",
    img:'https://images.pexels.com/photos/9007290/pexels-photo-9007290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id:3,
    title: "We Deliver Desserts Too",
    details:"Tasty Treats",
    img: 'https://i.pinimg.com/564x/18/d4/aa/18d4aad5ed60eade5578940e49b00da6.jpg',
  }
])
  return (
    <div className=" m-auto  max-w-[1640px] mx-auto p-4 py-4 overflow-hidden ">
      <h2 className="   mx-auto font_2   flex  justify-center items-center  font-medium text-[25px]  md:text-[35px] text-[#f97316]">New menu</h2>
        <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-6 p-4  relative overflow-hidden">
        {
                profood.map((pro)=> {
                  return(
                    <div key={pro.id} className=" relative  overflow-hidden">
                      <div className=" absolute  top-[80px]  px-[30px] text-white">
                        <h2 className=" sm:text-xl md:text-2xl lg:text-3xl  font-bold  ">{pro.title}</h2>
                        <p p className=" text-sm my-[15px] ">{pro.details}</p>
                        <button className= 'font-medium   border-none bg-white text-[#f97316]  font_2'>New</button>
                      </div>
                      <img  className=" w-full  md:w-[400px] h-[300px] object-cover  rounded-xl " src={pro.img} alt="img_food" />
                    </div>
                  )
                })
              }
        </div>
    </div>
  )
}

export default NewProduct
