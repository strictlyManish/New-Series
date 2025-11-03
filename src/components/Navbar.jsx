import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex w-screen justify-between items-center  px-10 py-8 text-gray-200  absolute z-10">
      <div className="flex gap-6">
        <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
        <NavLink to="/movies" className="hover:text-gray-300">Movies</NavLink>
        <NavLink to="/tvshows" className="hover:text-gray-300">TV Shows</NavLink>
        <NavLink to="/library" className="hover:text-gray-300">MY Library</NavLink>
      </div>

      <div className="bg-gray-700  rounded-md px-2 py-1 text-white">
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
