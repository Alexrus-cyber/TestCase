import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import { Route, Routes } from 'react-router-dom';
import Main from "./Pages/Main/Main";
import { useEffect, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMenu } from './slices/main';

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
      </Routes>
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
