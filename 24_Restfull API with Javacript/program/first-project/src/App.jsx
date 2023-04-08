import './App.css';
import Page from './component/page';
import Navbar from './component/navbar/navbar';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './component/LandingPage/landing-page';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<LandingPage />} />
        <Route path="page" element={<Page />} />
      </Route>
    </Routes>
  );
};

export default App;
