import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex justify-center gap-9 items-center py-5 font-medium">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-pink-400" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/recipes"
       className={({ isActive }) => (isActive ? "text-pink-400" : "")}
      >
        Recipes
      </NavLink>
      <NavLink
        to="/create"
        className={({ isActive }) => (isActive ? "text-pink-400" : "")}
      >
        Create
      </NavLink>
    </nav>
  );
}

export default Navigation;
