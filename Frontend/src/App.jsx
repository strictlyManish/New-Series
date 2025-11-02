import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Mainroutes from './routes/Mainroutes';
import { useEffect } from 'react';
import { asyncGetCurrentUser } from './app/actions/userAction';

function App() {
  const { user } = useSelector((state) => state.useReducer);
  const dispatch = useDispatch();


  useEffect(() => {
    !user && dispatch(asyncGetCurrentUser());
  }, [user]);

  return (
    <div className='bg-gray-800 h-screen w-screen text-white font-thin px-10 py-5 text-[20px] overflow-auto select-none'>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App