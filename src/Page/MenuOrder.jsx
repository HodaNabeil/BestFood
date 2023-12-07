
import {useSelector , useDispatch} from 'react-redux';
import { clear, decreaseQuantity, deleteOrder, incrementquantity } from '../rtk/FoodSlices/OrderFood';

import '../Style/MenuOrder.css'
import ScrollTopButton from '../components/ScrollTopButton';

function MenuOrder() {
  const  order= useSelector((state ) => state.order );
  const dispatch =useDispatch()
  
  const handleIncrement = (productId) => {
    dispatch(incrementquantity({ productId }));
  };
  const handleDecrease = (productId) => {
    dispatch(decreaseQuantity({ productId }));
  };

  const totalPrice = order.reduce((acc,order)=> {
    acc += order.price * order.quantiy
      return acc;
    },0)
  return order.length  === 0 ?  (
    <div className=' background_img h-[100vh - 75px]  '> 
      <p 
        className='  absolute left-[50%] top-[50%]  translate-x-[-50%] 
          translate-y-[-50%] flex justify-center items-center font_2 
        text-white text-[30px] md:text-[50px] '>
        The best foods order now
      </p>
    </div>
  ): (
    <div className=' background_img relative  max-w-[1640px]     m-auto p-4'>
        <h2 
          className='  w-[90%] text-[#fff] flex justify-center items-center
          text-center mx-auto font_2 
          text-[20px] font-bold md:text-[25px] p-4 lg:text-[50px]   '> 
            Order 
        </h2>
        <button 
          onClick={()=> {dispatch(clear())}}
          className=' rounded-[8px] text-white font_2 leading-1 btn_clear'  >  
          Clear
        </button>
        <p  className='  text-white py-3  text-1xl  tracking-widest font_2'>
          totalprice : <span className='font_2'>{totalPrice}<span className='text-[#f97316] font_2'>$</span></span>
          
        </p>
      <div>
        <table className='  menu_table   sm:max-w-[100%] lg:w-[600px]'>
          <thead >
            <tr className=' font_2' >
              <th>type</th>
              <th>img</th>
              <th>price</th>
              <th>action</th>
              <th> quantity </th>
              <th>Number of meals</th>
            </tr>
          </thead>
          <tbody>
          {
            order.map((order)=> {
              return(
                <tr key={order.id}>
                  <td>{order.name}</td>
                  <td>
                    <img src={order.image} 
                      className=' w-[50px]   h-[50px]   my-[5px]  mx-[10px]
                      rounded-[10px] object-cover'
                      alt='img' /> 
                    
                  </td>
                  <td>{order.price} $</td>
                  <td  className='flex '>
                    <button  className=' border-[#ffffff33]'   
                      onClick={()=> {dispatch(deleteOrder(order))}}> Delete 
                    </button>
                    
                    </td>
                  <td>{order.quantiy}</td>
                  <td className='flex items-center    gap-x-1 '>
                    <button  className='border-[#ffffff33]' onClick={()=> handleIncrement(order.id)}>+</button>
                    <button  className='border-[#ffffff33]' onClick={()=> handleDecrease(order.id)}>-</button>
                  </td>
              </tr>
              )
            })
          }
        </tbody>
        </table>
        </div>
      <ScrollTopButton/>
    </div>
  )
}

export default MenuOrder
