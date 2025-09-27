import Read from "./pages/Read";
import Create from "./pages/Create";
import Routes from "./Routes/Mainroutes";

function App() {
  return (
    <div className="bg-gray-900 h-screen w-screen text-white p-6">
      <div className="flex justify-between">
        <Create />
        <Read />
      </div>
      <Routes />
    </div>
  );
}

export default App;
