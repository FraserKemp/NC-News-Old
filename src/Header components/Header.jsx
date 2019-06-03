import React from 'react';
import { Link } from '@reach/router';
import './Header.css';

const Header = props => {
  return (
    <div className="header">
      <nav className="navbar">
        <Link to="/articles" id="navbar-element">
          Home
        </Link>
        <Link to="/topics" id="navbar-element">
          Topics
        </Link>
      </nav>
      <h1>Northcoders News</h1>
    </div>
  );
};

export default Header;
