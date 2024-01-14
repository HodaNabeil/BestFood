

import {createSlice} from '@reduxjs/toolkit';

export const  OrderSlice = createSlice({
  initialState : [],
  name: "OrderfoodSlice",
  reducers : {
    addOrder: (state , action) => {
      const findOrder = state.find((order) => order.id === action.payload.id);
      if(findOrder) {
        findOrder.quntity += 1
      }else{
        const cloneOrder = {...action.payload ,quntity: 1}
        state.push(cloneOrder)
      }
    },
    deleteOrder : (state, action ) => {
      return  state.filter ((product => product.id !== action.payload.id))
    },
    clear: (state, action) => {
        return []
    },
    incrementquantity : (state , action) => {
      const {productId} = { ...action.payload ,quntity : 1}
      const product = state.find((item) => item.id === productId)
      if(product) {
        product.quntity += 1;
      }
    }
    ,
    decreaseQuantity: (state , action) => {
      const {productId} = { ...action.payload ,quntity : 1}
      const product = state.find((item) => item.id === productId)
      if (product && product.quntity> 1) {
        product.quntity -= 1;
      }
    }
  }
  }

);


export const  {addOrder , deleteOrder ,clear ,incrementquantity ,decreaseQuantity} = OrderSlice.actions;

export default OrderSlice.reducer