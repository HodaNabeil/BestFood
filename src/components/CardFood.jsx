import { useState } from "react"
import { addOrder } from "../rtk/FoodSlices/OrderFood"
import { useDispatch } from "react-redux";


function CardFood({food}) {
  const [addCard, setAddCard] = useState(null);
  
  const dispatch = useDispatch();
  return (
    <div  
    className=' shadow-lg  rounded-lg rounded-t-lg  relative '>
  
    <img  src={food.image} 
    className=' object-cover max-w-full h-[300px] w-full rounded-sm  '
    alt={food.name} />
    <div className='flex font-bold m-1  justify-between items-center  p-2 mb-1'>
      <p>{food.name}</p>
      <p>
        <span 
          className="bg-orange-600 text-sm rounded-[50px] text-white p-1 ">
          {food.price}$
        </span>
      </p>
    </div>
    <button 
    onClick={()=> {
      dispatch(addOrder(food))
      setAddCard(food.id)
    }
  
    }
    className={` flex items-center  text-[#f97316] m-[10px] border-[#f97316]  
    
    transition duration-300   
    ${addCard  === food.id ? " bg-[#f97316] text-[#fff] " : ' '}`}>
        Add Order
      <span className=" ml-1 pt-[5px]  inline-block  icon-card "><ion-icon name="cart-outline"   > </ion-icon></span>
    </button>
</div>
  )
}

export default CardFood
