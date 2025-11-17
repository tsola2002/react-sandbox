import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';


function Navbar() {

  // destructure the username
  const [user] = useAuthState(auth);

  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>

        <div>
          <p>{auth.currentUser?.displayName}</p>
          <img src={auth.currentUser?.photoUrl || ""} width="100" height="100" />
        </div>
    </div>
  );
}

export default Navbar