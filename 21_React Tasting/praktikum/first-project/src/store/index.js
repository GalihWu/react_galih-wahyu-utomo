import { configureStore } from '@reduxjs/toolkit';
import productSlice from './features/product-slice';

export default configureStore({
  reducer: {
    product: productSlice,
  },
});
