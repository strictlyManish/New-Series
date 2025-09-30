import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center items-center bg-red py-3 gap-16">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recipies">Recipes</NavLink>
      <NavLink to="/create-recipies">Create Recipe</NavLink>
    </div>
  );
}

export default Navbar;
