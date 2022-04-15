import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    navigate('/');
  };

  return (
    <nav>
      <div className="nav-wrapper grey darken-3" style={{ padding: '0 2rem' }}>
        <span className="brand-logo">Link Shortener</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/links">Links</NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              Quit
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
