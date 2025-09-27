import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Recipies from "../Pages/Recipies";
import About from "../Pages/About";

function Mainroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipies" element={<Recipies />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Mainroutes;
