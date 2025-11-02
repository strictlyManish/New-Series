import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex justify-between items-center  px-8 py-4 text-gray-200">
      <div className="flex gap-6">
        <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
        <NavLink to="/movies" className="hover:text-gray-300">Movies</NavLink>
        <NavLink to="/tvshows" className="hover:text-gray-300">TV Shows</NavLink>
        <NavLink to="/library" className="hover:text-gray-300">My Library</NavLink>
      </div>

      <div className="bg-gray-700 rounded-md px-2 py-1">
        <input
          className="bg-transparent outline-none px-2"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  )
}

export default Navbar
