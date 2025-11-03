import Navbar from './components/Navbar';
import Mainroutes from './routes/Mainroutes';


function App() {
  return (
    <div className="bg-gray-800 h-screen text-white relative overflow-y-hidden overflow-x-auto">
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App