import Home from "./../pages/Home";
import Products from "./../pages/Products";
import Cart from "../pages/Cart";
import PageNotFound from "./../PageNotFound";
import { Route, Routes } from "react-router-dom";
import Login from './../pages/Login';

function Mainroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Mainroutes;
