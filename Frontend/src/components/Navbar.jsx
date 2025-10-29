import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { asyncLogOutUser } from '../app/actions/userAction';

function Navbar() {

  const user = useSelector((state) => state.useReducer.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logouthandler = () => {
    dispatch(asyncLogOutUser());
    navigate("/");
  };

  return (
    <div className='flex justify-center items-center gap-x-5 text-[15px]'>
      <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to='/products'>
        Products
      </NavLink>

      {user ? (
        <>
          <NavLink to='/admin/create-product'>
            Create Product
          </NavLink>
          <button onClick={logouthandler}>Logout</button>

        </>
      ) : (
        <>
          <NavLink to='/login'>
            Login
          </NavLink>

        </>
      )}
    </div>
  );
}

export default Navbar;
