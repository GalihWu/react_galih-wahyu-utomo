import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const dummyUser = { username: 'admin@gmail.com', password: '111111' };
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.username === username && user.password === password) {
      localStorage.setItem('isLoggedIn', true);
      alert('Login Success');
      navigate('/page');
    } else if (
      username === dummyUser.username &&
      password === dummyUser.password
    ) {
      localStorage.setItem('user', JSON.stringify(dummyUser));
      localStorage.setItem('isLoggedIn', true);
      window.location.reload();
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className=" d-flex row" style={{ marginTop: '100px' }}>
      <h2 className="text-center">Login with Email</h2>
      <div className="col-4" />
      <form onSubmit={handleLogin} className="col-4 mt-3 row gap-2 ">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <div className="d-flex gap-3 mt-3 justify-content-center">
          <button type="submit" className="btn btn-success rounded-1">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
