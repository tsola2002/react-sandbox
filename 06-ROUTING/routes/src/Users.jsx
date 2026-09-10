import React from 'react'
import { useParams } from 'react-router-dom';

function Users() {

  // destructuring the id from the useParams hook
  const  { id } = useParams();  

  return (
    <>
      <div>Users Page</div>
      <p>User ID: {id}</p>
    </>
  );
}

export default Users