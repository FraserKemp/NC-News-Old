import React from 'react';
import { Link } from '@reach/router';
import './Header.css';

const Header = props => {
  const { user } = props;
  return (
    <div className="header">
      <nav className="navbar">
        <Link to="/articles" id="navbar-element">
          <h4>Articles</h4>
        </Link>
        <Link to="/topics" id="navbar-element">
          <h4>Topics</h4>
        </Link>
        {!user && (
          <Link to="/login" id="last-navbar-element">
            <h4>Login</h4>
          </Link>
        )}
        {user && (
          <div id="last-navbar-element">
            <h4>{user.username}</h4>
          </div>
        )}
        {user && (
          <Link to="/articles" id="last-navbar-element">
            <h4>Logout</h4>
          </Link>
        )}
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
