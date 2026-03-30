
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { routes } from './routes';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Users from './Users';
import { Product } from './Product';


function App() {
  
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/about">About</Link> | {" "}
          <Link to="/contact">Contact</Link> | {" "}
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<Product />} />

        {/* Parent Route */}
        <Route path="/dashboard" element={<Dashboard />}>

            {/* Child Routes */}
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>
      <h1>Working With React Routes</h1>
    </>
  );

}

export default App
