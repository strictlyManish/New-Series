import Navigation from './components/naviagation'
import Mainroutes from './routes/Mainroutes';

function App() {
  return (
    <div className='bg-gray-800 text-white font-serif h-screen w-screen px-5 py-10'>
      <Navigation />
      <Mainroutes />
    </div>
  )
}

export default App