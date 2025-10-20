import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import About from './About';
import Contact from './Contact';


function App() {
  
  return (
     <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink> |{" "}
          <NavLink to="/about">About</NavLink> |{" "}
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <h1>Working With Routes</h1>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App
