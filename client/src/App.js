import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Admin/Login';
import Loader from './components/Loader';
import { HideLoading, SetPortfolioData, ShowLoading, ReloadData } from './redux/rootSlice';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {
  const { loading, portfolioData, reloadData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("https://mern-portfolio-api-hazel.vercel.app/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
      // Optionally set an error state to display a message to the user
    } finally {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if (!portfolioData || reloadData) {
      getPortfolioData();
    }
  }, [portfolioData, reloadData]);

  return (
    <DarkModeProvider>
      <BrowserRouter>
        {loading && <Loader />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
