import './App.css';
import Header from "./Components/Header/Header";
import { Route, Routes } from 'react-router-dom';
import Main from "./Pages/Main/Main";
import { useEffect, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMenu } from './slices/main';
import Footer from './Components/Footer/Footer';
import Favorite from './Pages/Favorites/Favorite';
import Basket from './Pages/Basket/Basket';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getMenu())
  },[dispatch])

  const routing = useMemo(() => {
    return (
      <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer/>
    </div>
    )
  })
  return (
    <BrowserRouter>
      <div className="App">{routing}</div>
    </BrowserRouter>
  );
}

export default App;
