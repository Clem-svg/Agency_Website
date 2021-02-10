import React from 'react';
import { Link } from 'react-router-dom';
import works from '../../data/works';

const NavWorks = () => (
  <nav>
    <div>
      {works.map((work) => (
        <Link to={`/works/${work.slug}-study-case`} key={work.slug}>
          {work.slug}
        </Link>
      ))}
    </div>
  </nav>
);
export default NavWorks;
