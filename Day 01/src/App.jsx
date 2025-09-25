import Read from "./components/Read";
import Creat from "./components/Creat";

function App() {
  return (
    <div className="bg-gray-800 text-white h-screen w-screen flex justify-between p-5 overflow-hidden">
      <Creat/>
      <Read />
    </div>
  );
}

export default App;
