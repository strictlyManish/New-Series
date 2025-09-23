import Read from "./components/Read";
import Creat from "./components/Creat";
import { useState } from "react";
function App() {
  const [data, setData] = useState([]);



  return (
    <div className="bg-gray-900 text-white h-screen w-screen flex justify-between p-5 overflow-hidden">
      <Creat data={data} setData={setData} />
      <Read data={data} setData={setData} />
    </div>
  );
}

export default App;
