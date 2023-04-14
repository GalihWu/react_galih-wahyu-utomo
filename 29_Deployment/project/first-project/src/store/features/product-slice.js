import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import ProductAPI from '../../apis/product.api';

const initialState = {
  data: [],
};

export const fetchProduct = createAsyncThunk('fetch/products', async () => {
  try {
    const response = await ProductAPI.getAllProducts();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteProduct = createAsyncThunk('delete/products', async (id) => {
  try {
    const response = await ProductAPI.deleteProduct(id);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const addProduct = createAsyncThunk('post/products', async (product) => {
  try {
    const response = await ProductAPI.addProduct(product);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// export const productSlice = createSlice({

export const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        console.log(action.payload);
        return (state = {
          ...state,
          data: action.payload,
        });
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.data = state.data.filter((list) => list.id !== action.payload.id);
        // console.log(action.payload);
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.data.push(action.payload);
      });
  },
});

export default productSlice.reducer;
