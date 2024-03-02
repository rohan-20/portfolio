import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      <nav>
        <Link to='/' className='name-navbar'>
          ROHAN SHARMA HEHE
        </Link>
        <ul>
          <li className={location.pathname === '/explore' ? 'active' : ''}>
            <Link to='/explore'>Explore</Link>
          </li>
          <li>
            <a href='/Resume.pdf' target='_blank' rel='noopener noreferrer'>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;