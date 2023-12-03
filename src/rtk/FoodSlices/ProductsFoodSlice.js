

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const fetchProdcuts = createAsyncThunk('productsSlice/fetchProdcuts', async () => {
  try {
    const res = await fetch('productfood.json');
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw error;
  }
});

export const productsSlice = createSlice({
  name: 'productsSlice',
  initialState : [],
  reducers: {
  },
  extraReducers:(builder) => {
    builder.addCase(fetchProdcuts.fulfilled, (state,action)=> {
      return action.payload
    })
    
  }
})


export const actions = productsSlice.actions;

export default productsSlice.reducer

