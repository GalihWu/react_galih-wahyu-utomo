import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [
      {
        id: 'e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836',
        productName: 'John',
        productCategory: 'Doe',
        productFreshness: 'Doe',
        productPrice: 'Doe',
        image: 'Doe',
        additionalDescription: 'Doe',
      },
      {
        id: 'e7ce2b97-d0c1-4a75-9c1d-e6dfc8441821',
        productName: 'Acer',
        productCategory: 'Laptop',
        productFreshness: 'New',
        productPrice: '470',
        image: 'Doe',
        additionalDescription: 'Laptop Acer Terbaru',
      },
    ],
    newProduct: {
      id: uuidv4(),
      productName: '',
      productCategory: '',
      imageFile: '',
      productCondition: '',
      additionalDescription: '',
      productPrice: 0,
    },
  },
  reducers: {
    getProducts: (state) => {
      state.products;
    },
    removeProduct: (state, action) => {
      //   console.log(action.payload);
      state.products = state.products.filter(
        (list) => list.id !== action.payload
      );
    },
    addProduct: (state, action) => {
      const NEWPRODUCT = { id: uuidv4(), ...action.payload };
      state.products = [...state.products, NEWPRODUCT];
    },
  },
});

export const { getProducts, removeProduct, addProduct } = productSlice.actions;

export default productSlice.reducer;
