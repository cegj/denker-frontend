import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {UserContextData} from './Context/UserContext'
import Home from './Components/Home/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <UserContextData>
        <Routes>
          <Route path="/*" element={<Home />}/>
        </Routes>
      </UserContextData>
    </BrowserRouter>
    </>
  );
}

export default App;
