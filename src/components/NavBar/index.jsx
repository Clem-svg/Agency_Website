import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Works">Works</Link>
  </nav>
);

export default Navbar;
