import Navigation from "./components/Navigation";
import Mainroutes from "./routes/Mainroutes";

function App() {
  return (
    <div className="bg-gray-800  text-white font-thin px-10">
      <Navigation />
      <Mainroutes />
    </div>
  );
}

export default App;
