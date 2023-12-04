import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
  
    try {
      const res = await fetch('/Menu.json');
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error.message);
      throw error;
    }
  }
);

export const productsSlice = createSlice({
  name: "fetchProducts",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  // extraReducers:(builder) => {
  //   builder.addCase(fetchProdcuts.fulfilled, (state,action)=> {
  //     return action.payload
  //   })

  // }
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const actions = productsSlice.actions;

export default productsSlice.reducer;
