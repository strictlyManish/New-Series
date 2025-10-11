import Navigation from "./components/Navigation";
import Mainroutes from "./routes/Mainroutes";


function App() {
  return (
    <div className="bg-gray-800 h-screen w-screen font-md text-white px-20 py-5">
      <Navigation />
      <Mainroutes />
    </div>
  );
}

export default App;
