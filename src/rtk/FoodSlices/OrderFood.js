

import {createSlice} from '@reduxjs/toolkit';

export const  OrderSlice = createSlice({
  initialState : [],
  name: "OrderfoodSlice",
  reducers : {
    addOrder: (state , action) => {
      const findOrder = state.find((product) => product.id === action.payload.id);
      if(findOrder) {
        findOrder.qauntity += 1
      }else{
        const cloneOrder = {...action.payload ,qauntity: 1}
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
      const {productId} = { ...action.payload ,qauntity : 1}
      const product = state.find((item) => item.id === productId)
      if(product) {
        product.qauntity += 1;
      }
    }
    ,
    decreaseQuantity: (state , action) => {
      const {productId} = { ...action.payload ,qauntity : 1}
      const product = state.find((item) => item.id === productId)
      if (product && product.qauntity> 1) {
        product.qauntity -= 1;
      }
    }
  }
  }

);


export const  {addOrder , deleteOrder ,clear ,incrementquantity ,decreaseQuantity} = OrderSlice.actions;

export default OrderSlice.reducer