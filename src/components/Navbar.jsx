import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink></li>
        <li><NavLink to="/status" className={({ isActive }) => isActive ? "active" : ""}>Estado</NavLink></li>
        <li><NavLink to="/news" className={({ isActive }) => isActive ? "active" : ""}>Noticias</NavLink></li>
        <li><NavLink to="/downloads" className={({ isActive }) => isActive ? "active" : ""}>Descargas</NavLink></li>
        <li><a href="https://discord.gg/rNtPqQyBwg" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i> Discord</a></li>
        <li><a href="https://github.com/LeilosFN" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Github</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;