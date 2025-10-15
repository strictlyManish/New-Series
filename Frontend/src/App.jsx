import { useEffect } from 'react';
import Navigation from './components/naviagation'
import Mainroutes from './routes/Mainroutes';
import { useDispatch } from 'react-redux';
import { asynccurrentuser } from './store/action/userAction';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asynccurrentuser())
  },[])

  return (
    <div className='bg-gray-800 text-white font-serif h-screen w-screen px-5 py-5'>
      <Navigation />
      <Mainroutes />
    </div>
  )
}

export default App