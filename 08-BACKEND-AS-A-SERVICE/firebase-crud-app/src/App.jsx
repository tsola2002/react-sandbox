import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Login';
import MainPage from './MainPage';
import Navbar from './Navbar';
import "./App.css";
import StudentsTable from './StudentsTable';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';



function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // THIS USEEFFECT WILL CHECK IF A USERS CURRENT LOGGEDIN STATE
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // IF USER IS NOT LOGGEDIN SHOW THE LOADIG TEXT
  if (loading) return <p>Loading...</p>;

  // IF USER IS LOGGED IN RENDER THE DATA TABLE IF NOT DISPLAY THE LOGIN COMPONENT
  return user ? <StudentsTable /> : <Login />

}

export default App