import React from 'react';
import { Link } from '@reach/router';
import './Header.css';

const Header = props => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/articles" id="navbar-element">
          Home
        </Link>
        <Link to="/topics" id="navbar-element">
          Topics
        </Link>
        <Link>Login</Link>
        <Link>Logout</Link>
      </nav>
    </div>
  );
};

export default Header;
