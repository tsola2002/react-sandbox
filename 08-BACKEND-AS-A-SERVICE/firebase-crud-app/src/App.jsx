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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  return user ? <StudentsTable /> : <Login />

  // return (
  //   <>
  //     <StudentsTable/>
  //   </>
  // );
}

export default App