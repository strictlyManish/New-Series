import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center bg-transparent px-2">
      <div className="bg-gray-700 flex flex-wrap gap-2 p-2 rounded-full transition-all max-w-full">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-500 rounded-full text-white px-5 py-2 shadow-2xl"
              : "px-5 py-2"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-500 rounded-full text-white px-5 py-2 shadow-2xl"
              : "px-5 py-2"
          }
          to="/recipies"
        >
          Recipes
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-500 rounded-full text-white px-5 py-2 shadow-2xl"
              : "px-5 py-2"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-orange-500 rounded-full text-white px-5 py-2 shadow-2xl"
              : "px-5 py-2"
          }
          to="/create-recipes"
        >
          Create Recipes
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
