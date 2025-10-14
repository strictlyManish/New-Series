import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md font-medium ${
      isActive ? 'text-pink-500' : 'text-gray-300 hover:text-white'
    }`;

  return (
    <div className="flex items-center justify-center gap-5">
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/products" className={linkClass}>
        Products
      </NavLink>
      <NavLink to="/login" className={linkClass}>
        Login
      </NavLink>
    </div>
  );
}

export default Navigation;
