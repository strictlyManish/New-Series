import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Create from "./../pages/Create";
import Recipes from "./../pages/Recipes";
import Details from './../components/Details';

function Mainroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/:id" element={<Details/>}/>
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}

export default Mainroutes;
