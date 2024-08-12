import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from './TechmatesLogo2.png';
import './Navbar.css';
import UserContext from './UserContext'; // Import UserContext

const Navbar = () => {
  const { user, setUser } = useContext(UserContext); // Access user data from context

  const handleSignOut = () => {
    // Clear user data from context on sign out
    setUser(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="TechMates Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {!user ? (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </>
        ) : (
          <>
            <Link to="/profile">My Profile</Link>
            <Link to="/" onClick={handleSignOut}>Sign Out</Link>
            <span>Welcome, {user.username}</span>
          </>
        )}
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
    </nav>
  );
};

export default Navbar;