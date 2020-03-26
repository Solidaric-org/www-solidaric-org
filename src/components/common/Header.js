import React from 'react';
import { Link } from 'gatsby';

import '../../assets/sass/main.scss';

const Header = () => (
  <header id="header">
    <Link className="title" to="/">
      Solidaric
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/">Start</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
