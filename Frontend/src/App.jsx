import Navbar from './components/Navbar';
import Mainroutes from './routes/Mainroutes';

function App() {
  return (
    <div className='h-screen bg-gray-800 text-white font-thin px-10 py-5 text-[20px]'>
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App