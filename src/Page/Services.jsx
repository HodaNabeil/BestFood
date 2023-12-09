

import  hero from '../Img/ser.webp'

import ScrollTopButton from '../components/ScrollTopButton';
import Footer from '../components/Footer';

import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { fetchProducts } from '../rtk/FoodSlices/ProductsFoodSlice';
import { addOrder } from '../rtk/FoodSlices/OrderFood';





function Services() {
  const menu = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="  max-w-[1640px] m-auto p-4 pb-[0] relative overflow-hidden">
        <div className=' relative'>
          <img  className=' object-cover w-full h-[500px] rounded-[8px]'
            src= {hero} alt="hero_img" />
            <div className='servies   absolute  top-[35%] left-[20%]'>
            <h2 className='flex  justify-center  text-[#000]
              items-center text-[50px]  sm:text-[70px] md:text-[100px]  '>
                delicious food
              </h2>
            </div>
        </div>
        {/*  Our Services */}
        <div>
          <h3 className='font_2 text-[50px] text-[#f97316]
          flex  justify-center items-center m-[30px]  text-center'>
            Services
          </h3>
          <div className='  grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
              menu.map((food)=> {
                return (
                  <div key={food.id} className=' services shadow-lg   rounded-lg rounded-t-lg  relative '>
                      <ion-icon name="cart-outline"  > </ion-icon>
                      <img  className=' object-cover max-w-full h-[300px] w-full rounded-sm '
                        src={food.image} alt={food.name} />
                        <div className='flex justify-between items-center  p-2 mb-1'>
                          <p>{food.name}</p>
                          <p>
                            <span className="bg-orange-600 rounded-lg text-white p-1 ">
                              {food.price}$ 
                            </span>
                          </p>
                        </div>
                        <button
                        onClick={()=> {dispatch(addOrder(food))}}
                          className="  text-[#f97316] m-[10px] border-[#f97316]  
                          hover:text-[#fff] hover:bg-[#f97316]  transition duration-300">
                          Add Order
                        </button>
                  </div>
                )
            })
          }  
        </div>
        </div>
        {/* Footer */}
        <ScrollTopButton/>
        <Footer/>
    </section>
  )
}

export default Services
