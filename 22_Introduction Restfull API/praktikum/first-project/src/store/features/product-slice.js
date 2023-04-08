import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import ProductAPI from '../../apis/product.api';

const initialState = {
  data: [],
  newProduct: {
    id: uuidv4(),
    productName: '',
    productCategory: '',
    imageFile: '',
    productCondition: '',
    additionalDescription: '',
    productPrice: 0,
  },
};

export const fetchProduct = createAsyncThunk('fetch/products', async () => {
  try {
    const response = await ProductAPI.getAllProducts();
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
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      return (state = {
        ...state,
        data: action.payload,
      });
    });
  },
});

export default productSlice.reducer;
