import Read from "./components/Read";
import Creat from "./components/Creat";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    { title: "implimentation of databse is databse is preform", id: '86d54r', isComplited: false },
    { title: "Vector databse", id: '8654r', isComplited: false },
  ]);

  return (
    <div className="bg-gray-800 text-white h-screen w-screen flex justify-between p-5 overflow-hidden">
      <Creat data={data} setData={setData} />
      <Read data={data} setData={setData} />
    </div>
  );
}

export default App;
