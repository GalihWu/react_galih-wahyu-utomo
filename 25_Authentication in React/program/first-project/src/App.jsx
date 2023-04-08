import './App.css';
import Page from './components/page';
import Navbar from './components/navbar/navbar';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/landing-page';
import LoginPage from './components/login/login-page';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<LandingPage />} />
        <Route path="page" element={<Page />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
