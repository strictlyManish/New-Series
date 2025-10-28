import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Navbar() {

  const user = useSelector((state) => state.useReducer.users);



  return (
    <div className='flex justify-center items-center gap-x-5 text-[15px]'>
      <NavLink to='/' >
        Home
      </NavLink>
      <NavLink to='/products' >
        Products
      </NavLink>

      {user ? <>
        <NavLink to='/admin/create-product' >
          Create Product
        </NavLink>
      </> : <>
        <NavLink to='/login' >
          Login
        </NavLink>

      </>}
    </div>
  )
}

export default Navbar