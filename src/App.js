import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {UserContextData} from './Context/UserContext'
import Home from './Components/Home/Home';
import User from './Components/User/User';
import Denke from './Components/Denke/Denke';

function App() {

  return (
    <>
    <BrowserRouter>
      <UserContextData>
        <Routes>
          <Route path="/*" element={<Home />}/>
          <Route path="/user/*" element={<User />}/>
          <Route path="/denke/*" element={<Denke />}/>
        </Routes>
      </UserContextData>
    </BrowserRouter>
    </>
  );
}

export default App;
