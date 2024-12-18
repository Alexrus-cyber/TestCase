import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import { Route, Routes } from 'react-router-dom';
import Main from "./Pages/Main/Main";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
