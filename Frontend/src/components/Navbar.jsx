import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Navbar() {

  const user = useSelector((state) => state.useReducer.user);


  return (
    <div className='flex justify-center items-center gap-x-5 text-[15px]'>


      <NavLink to='/'>Home</NavLink>
      {user ? (
        <>
          <NavLink to='/admin/create-product'>Create product</NavLink>
          <NavLink to='/admin/user-profile'>Profile</NavLink>

        </>
      ) : (
        <>
          <NavLink to='/login'>Login</NavLink>
        </>
      )}


    </div>
  );
}

export default Navbar;
