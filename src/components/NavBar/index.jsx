import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Accueil</Link>
    <Link to="/About">À propos</Link>
    <Link to="/Works">Projets</Link>
  </nav>
);

export default Navbar;
