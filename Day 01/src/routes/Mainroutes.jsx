import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Service from "../pages/Services";
import ProductDetails from "../components/ProductDetails";

function Mainroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />}>
        <Route path="/service/details/:fruit" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}

export default Mainroutes;
