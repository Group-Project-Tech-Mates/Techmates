import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isAuthenticated, user }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {!isAuthenticated ? (
        <>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </>
      ) : (
        <>
          <Link to="/profile">My Profile</Link>
          <Link to="/signout">Sign Out</Link>
          <span>Welcome, {user.username}</span>
        </>
      )}
    </nav>
  );
};

export default NavBar;



