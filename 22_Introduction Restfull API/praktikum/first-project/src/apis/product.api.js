import { axiosInstance } from '../configs/axiosInstance';

const ProductAPI = {
  async getAllProducts() {
    try {
      const response = await axiosInstance.get('/products');
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default ProductAPI;
