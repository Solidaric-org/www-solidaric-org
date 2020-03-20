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
          <Link to="/de">Start</Link>
        </li>
        {/*
        <li>
          <Link to="/de/generic">Generic</Link>
        </li>
        <li>
          <Link to="/de/elements">Elements</Link>
        </li>
        */}
      </ul>
    </nav>
  </header>
);

export default Header;
