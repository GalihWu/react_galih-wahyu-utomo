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

  async deleteProduct(id) {
    try {
      const response = await axiosInstance.delete(`/products/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async addProduct(data) {
    try {
      const response = await axiosInstance.post(`/products`, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default ProductAPI;
