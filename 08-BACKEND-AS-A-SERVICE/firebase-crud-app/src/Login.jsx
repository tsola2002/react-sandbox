import React from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <Container style={{ textAlign: "center", marginTop: "100px" }}>
      <Typography variant="h5" mb={2}>
        Sign in to continue
      </Typography>

      <Button variant="contained" onClick={handleLogin}>
        Sign in with Google
      </Button>
    </Container>
  );
}

export default Login