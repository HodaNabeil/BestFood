


import {useSelector , useDispatch} from 'react-redux';


function MenuOrder() {
  const  order= useSelector((state ) => state.order );
  console.log(order);
  
  return (
    <div>
      <h2> page Order </h2>
      {
        order.map((order)=> {
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
