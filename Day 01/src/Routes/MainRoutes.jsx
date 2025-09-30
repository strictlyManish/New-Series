import { Route, Routes } from "react-router-dom";
import Create from './../Pages/Create';
import Recipies from './../Pages/Recipies';
import Home from './../Pages/Home';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/recipies" element={<Recipies/>} />
      <Route path="/create-recipies" element={<Create/>} />
    </Routes>
  );
}

export default MainRoutes;
