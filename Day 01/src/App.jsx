import React from "react";
import Navbar from "./Components/Navbar";
import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    <div className="h-screen px-10 w-screen bg-gray-900 text-md text-white overflow-x-hidden">
      <Navbar/>
      <MainRoutes/> 
    </div>

  );
}

export default App;
