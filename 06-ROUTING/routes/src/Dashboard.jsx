import React from 'react'
import { Outlet, Link } from 'react-router-dom'


function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>

        <nav>
          <Link to="users">Users</Link> | {" "}
          <Link to="settings">Settings</Link>
        </nav> 
        
        <hr /> 
        
        {/* Child pages render here */} 
        
        <Outlet />

    </div>
  )
}

export default Dashboard