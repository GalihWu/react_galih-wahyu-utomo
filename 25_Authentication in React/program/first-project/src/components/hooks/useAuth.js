import ky from 'ky';
import { useState } from 'react';
import { removeAuthCookie } from '../../utils/cookies';

const BASE_URL = 'https://reqres.in/api';

export default function useAuth() {
  const [isLoading, setIsLoading] = useState(false);

  const login = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const response = await ky
        .post(`${BASE_URL}/login`, {
          json: { email, password },
        })
        .json();

      return response;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    removeAuthCookie();
  };

  return {
    login,
    logout,
    isLoading,
  };
}
