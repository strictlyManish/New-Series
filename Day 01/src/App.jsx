import React from "react";
import Mainroutes from "./Routes/Mainroutes";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="h-screen w-screen font-semibold bg-gray-800 text-white py-2  px-10">
      <Navbar />
      <Mainroutes />
    </div>
  );
}

export default App;
