import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Recipies from "../Pages/Recipies";
import About from "../Pages/About";
import Create from "../Components/Create";
import Details from "../Components/Details"
import Favrate from "../Components/Favrate";

function Mainroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipies" element={<Recipies />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/about" element={<About />} />
      <Route path="/favrate" element={<Favrate />} />
      <Route path="/create-recipes" element={<Create />} />
    </Routes>
  );
}

export default Mainroutes;