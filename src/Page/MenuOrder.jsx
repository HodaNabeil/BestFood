


import {useSelector , useDispatch} from 'react-redux';


function MenuOrder() {
  const  order= useSelector((state ) => state.order );
  console.log(order);
  
  return (
    <div>
      <h2>Order</h2>
      {
        order.map(()=> {
          return(
            <div>
              {order.id}
              </div>
          )
        })
      }
    </div>
  )
}

export default MenuOrder
