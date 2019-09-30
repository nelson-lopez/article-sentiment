import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Body">Articles</Link>
        </li>
        <li>
          <Link to="/">Header</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
