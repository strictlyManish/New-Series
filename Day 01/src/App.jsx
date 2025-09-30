import React from "react";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div className="h-screen w-screen px-10 overflow-x-hidden bg-[#010101] text-gray-100">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
