import React from 'react';
import { Link } from '@reach/router';

const Header = props => {
  return (
    <div>
      <nav>
        <Link to="/articles">Home</Link>
      </nav>
    </div>
  );
};

export default Header;
