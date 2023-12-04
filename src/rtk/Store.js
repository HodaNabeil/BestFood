// store.js
import { configureStore } from '@reduxjs/toolkit'
import  productsSlice from './FoodSlices/ProductsFoodSlice'

import  orderProduct  from './FoodSlices/OrderFood'
export const store = configureStore({
  reducer: {
    allProducts: productsSlice,
    order :  orderProduct ,
  },
})

export default store;