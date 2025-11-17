import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';
import { signOut } from 'firebase/auth';


function Navbar() {

  // destructure the username
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth); 
  };

  return (
    <div className="navbar">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </div>
        <div className="user">
          <p>{auth.currentUser?.displayName}</p>
          <img src={auth.currentUser?.photoUrl || ""} width="100" height="100" />
          <button onClick={signUserOut}>Log Out</button>
        </div>
    </div>
  );
}

export default Navbar