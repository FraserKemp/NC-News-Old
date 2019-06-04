import React from 'react';
import { Link } from '@reach/router';
import './Header.css';

const Header = props => {
  return (
    <div className="header">
      <nav className="navbar">
        <Link to="/articles" id="navbar-element">
          Articles
        </Link>
        <Link to="/topics" id="navbar-element">
          Topics
        </Link>
      </nav>
      <Link to="/articles">
        <h1>
          <span id="first-letter">N</span>orthcoders
          <span id="first-letter">N</span>ews
        </h1>
      </Link>
    </div>
  );
};

export default Header;
