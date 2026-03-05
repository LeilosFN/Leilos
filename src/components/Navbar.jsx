import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="brand">
        </li>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/status" className={({ isActive }) => isActive ? "active" : ""}>Status</NavLink></li>
        <li><NavLink to="/news" className={({ isActive }) => isActive ? "active" : ""}>News</NavLink></li>
        <li><NavLink to="/downloads" className={({ isActive }) => isActive ? "active" : ""}>Downloads</NavLink></li>
        <li><a href="https://mini.crisu.qzz.io/?d=LeilosDiscord" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i> Discord</a></li>
        <li><a href="https://github.com/LeilosFN" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Github</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
