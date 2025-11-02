import Navbar from './components/Navbar';
import Mainroutes from './routes/Mainroutes';


function App() {
  return (
    <div className="bg-gray-800 h-screen px-15 py-5 text-white">
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App