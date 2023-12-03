

import {createSlice} from '@reduxjs/toolkit';

export const  OrderSlice = createSlice({
  initialState : [],
  name: "OrderfoodSlice",
  reducers : {
    addOrder: (state , action) => {
      const findOrder = state.find((order) => order.id === action.payload.id);
      if(findOrder) {
        findOrder.quantiy += 1
      }else{
        const cloneOrder = {...action.payload , quantiy: 1}
        state.push(cloneOrder)
      }
    },
    deleteOrder : (state, action ) => {
        state.filter ((order => order.id !== action.payload.id))
    },
    clear: (state, action) => {
        return []
    }
  }
  }

);


export const  {addOrder , deleteOrder ,clear} = OrderSlice.actions;

export default OrderSlice.reducer