import axios from 'axios';

const config = {
  baseURL: 'https://642bdb0f208dfe2547214167.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const axiosInstance = axios.create(config);
