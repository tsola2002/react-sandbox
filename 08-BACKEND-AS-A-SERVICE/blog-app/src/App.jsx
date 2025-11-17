import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Login';
import MainPage from './MainPage';
import Navbar from './Navbar';
import "./App.css";



function App() {
  return (
    <div className='App'>  
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={ <MainPage /> } />
                <Route path='/login' element={ <Login /> } />
            </Routes>
        </Router>
    </div>
  );
}

export default App