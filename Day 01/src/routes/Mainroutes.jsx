import { Route, Routes } from "react-router-dom";
import Update from "../components/Update";
function Mainroutes() {
  return (
    <Routes>
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  );
}

export default Mainroutes;
