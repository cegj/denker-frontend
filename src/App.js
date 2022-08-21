import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {UserContextData} from './Context/UserContext'
import Home from './Components/Home/Home';
import User from './Components/User/User';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <>
    <BrowserRouter>
      <UserContextData>
        <Routes>
          <Route path="/*" element={<Home />}/>
          <Route path="/user/*" element={<ProtectedRoute component={<User />}/>}/>
        </Routes>
      </UserContextData>
    </BrowserRouter>
    </>
  );
}

export default App;
