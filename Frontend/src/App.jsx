import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Mainroutes from './routes/Mainroutes';
import { useEffect } from 'react';
import { asyncGetCurrentUser } from './app/actions/userAction';

function App() {
  
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.useReducer);
  
    useEffect(() => {
        !user && dispatch(asyncGetCurrentUser());
    }, [user]);

  return (
    <div className='bg-gray-800 text-white font-thin px-10 py-5 text-[20px] overflow-hidden select-none'>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App