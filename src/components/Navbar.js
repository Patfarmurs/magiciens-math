import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">∞</span>
        <h1 className="navbar-title">Math Magicians</h1>
      </div>
      <ul className="navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/calculator' ? 'active' : ''}>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className={location.pathname === '/quotes' ? 'active' : ''}>
          <Link to="/quotes">Quotes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
