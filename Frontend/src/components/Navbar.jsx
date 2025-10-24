import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-center items-center gap-x-5 text-[15px]'>
        <NavLink to='/' >
            Home
        </NavLink>
        <NavLink to='/products' >
            Products
        </NavLink>
        <NavLink to='/login' >
            Login
        </NavLink>
    </div>
  )
}

export default Navbar