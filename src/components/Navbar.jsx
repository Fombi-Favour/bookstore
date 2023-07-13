import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaUserAlt } from 'react-icons/fa';
import '../index.css';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];

const Navbar = () => (
  <nav className="navbar">
    <div className="menu-nav">
      <h1>Bookstore CMS</h1>
      <ul className="menu">
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
    <div className="icon-nav">
      <FaUserAlt />
    </div>
  </nav>
);

export default Navbar;
