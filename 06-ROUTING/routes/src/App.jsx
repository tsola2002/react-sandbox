
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import About from './About';
import Contact from './Contact';
import Home from './Home';
// import { routes } from './routes';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Users from './Users';
import { Product } from './Product';
import UserList from './UserList';


function App() {

  // creating hook
  const navigate = useNavigate();

  const handleClick = () => { 
    navigate('/about');
  }
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/dashboard/users/:id" element={<Users />} />

        {/* Parent Route */}
        <Route path="/dashboard" element={<Dashboard />}>

            {/* Child Routes */}
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />

        </Route>
      </Routes>
      <header>
        <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/about">About</Link> | {" "}
          <Link to="/contact">Contact</Link> | {" "}
          <Link to="/dashboard">Dashboard</Link> | {" "}
          <Link to="/users">Users</Link>
        </nav>
      </header> 
      
      <h1>Working With React Routes</h1>
      <button onClick={handleClick}>Go to About Page</button>
    </>
  );

}

export default App
