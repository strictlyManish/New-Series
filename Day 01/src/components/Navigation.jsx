import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-900 text-white">
      <NavLink 
        to="/" 
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold" : "text-white"
        }
      >
        Home
      </NavLink>

      <NavLink 
        to="/about" 
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold" : "text-white"
        }
      >
        About
      </NavLink>

      <NavLink 
        to="/contact" 
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold" : "text-white"
        }
      >
        Contact
      </NavLink>
      <NavLink 
        to="/service" 
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold" : "text-white"
        }
      >
        Services
      </NavLink>
    </nav>
  );
}

export default Navigation;
