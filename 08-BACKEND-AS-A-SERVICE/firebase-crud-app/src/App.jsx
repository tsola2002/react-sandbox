import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Login';
import MainPage from './MainPage';
import Navbar from './Navbar';
import "./App.css";
import StudentsTable from './StudentsTable';



function App() {
  return (
    <>
      <StudentsTable/>
    </>
  );
}

export default App