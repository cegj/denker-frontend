import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
