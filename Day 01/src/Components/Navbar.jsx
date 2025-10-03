import { NavLink } from "react-router-dom";

function Navbar() {

  return (
    <div className="flex justify-center items-center bg-red py-5 gap-16 relative">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recipies">Recipes</NavLink>
      <NavLink to="/favorite">
        Liked
      </NavLink>
      <NavLink to="/create-recipies">Create</NavLink>
    </div>
  );
}

export default Navbar;
