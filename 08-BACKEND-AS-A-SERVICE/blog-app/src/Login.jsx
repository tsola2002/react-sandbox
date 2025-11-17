import React from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {

  // variable for navigation library
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    const result = signInWithPopup(auth, provider);
    // console.log(result);
    navigate("/"); 
  }

  return (
    <div>
      <p>Sign In With Google</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>  
  );
}

export default Login