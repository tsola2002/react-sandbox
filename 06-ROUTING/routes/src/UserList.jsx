import React from 'react'
import { Link } from 'react-router-dom';

const users = [
   {id: 1, name: "John Doe"},
   {id: 2, name: "Jane Smith"}
];

function UserList() {
  return (
      <div>
          <h2>User List</h2>
              {users.map(user => (
                  <p key={user.id}>
                      <Link to={`/dashboard/users/${user.id}`}>{user.name}</Link>   
                      {user.name}</p>
              ))}       
      </div>
  )
}

export default UserList