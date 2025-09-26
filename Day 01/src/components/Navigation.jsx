import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex gap-5 justify-center py-5">
      <NavLink to="/" className={(e) => (e.isActive ? "text-pink-500" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={(e) => (e.isActive ? "text-pink-500" : "")}
      >
        Contact
      </NavLink>
      <NavLink
        to="/service"
        className={(e) => (e.isActive ? "text-pink-500" : "")}
      >
        Services
      </NavLink>
      <NavLink
        to="/about"
        className={(e) => (e.isActive ? "text-pink-500" : "")}
      >
        About
      </NavLink>
    </div>
  );
}

export default Navigation;
