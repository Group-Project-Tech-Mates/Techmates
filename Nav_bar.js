import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ isAuthenticated }) {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
        {isAuthenticated ? (
          <>
            <li><NavLink to="/profile" activeClassName="active">My Profile</NavLink></li>
            <li><NavLink to="/signout" activeClassName="active">Sign Out</NavLink></li>
          </>
        ) : (
          <>
            <li><NavLink to="/signup" activeClassName="active">Sign Up</NavLink></li>
            <li><NavLink to="/signin" activeClassName="active">Sign In</NavLink></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;



