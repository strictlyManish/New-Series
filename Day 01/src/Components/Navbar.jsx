import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center gap-5 bg-transparent">
      <div className="bg-gray-700 flex gap-2 p-2 rounded-full">
        <NavLink
          className={(e) =>
            e.isActive
              ? "bg-gray-500 rounded-full text-white px-5 py-2 shadow-2xl"
              : "px-5 py-2"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive
              ? "bg-gray-500 rounded-full text-white px-5 py-2 shadow-2xl"
              : "px-5 py-2"
          }
          to="/recipies"
        >
          Recipes
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive
              ? "bg-gray-500 rounded-full text-white px-5 py-2 shadow-2xl"
              : "px-5 py-2"
          }
          to="/about"
        >
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
