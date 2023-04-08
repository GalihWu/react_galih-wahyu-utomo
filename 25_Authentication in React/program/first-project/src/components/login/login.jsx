// Page tidak digunakan, hanya buat latihan

import React from 'react';
import useAuth from '../hooks/useAuth';
import { setAuthCookie } from '../../utils/cookies';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const loginResponse = await login({ email, password });
    if (!loginResponse) {
      alert('error');
      return;
    }

    setAuthCookie(loginResponse.token);
    alert('Login Success');
    navigate('/page');
  };
  return (
    <div className="text-center d-flex row" style={{ marginTop: '100px' }}>
      <h2>Login Page</h2>
      <div className="col-4" />
      <form onSubmit={handleOnSubmit} className="col-4 mt-3 row gap-2 ">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <div className="d-flex gap-3 mt-3 justify-content-center">
          <button type="reset" className="btn btn-danger rounded-1">
            Clear
          </button>
          <button
            type="submit"
            aria-busy={isLoading}
            className="btn btn-success rounded-1"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
