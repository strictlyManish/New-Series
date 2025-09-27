import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import Recipe from "./Context/Recipe.jsx";

createRoot(document.getElementById("root")).render(
  <Recipe>
    <BrowserRouter>
      <App />
      <ToastContainer theme="dark" />
    </BrowserRouter>
  </Recipe>
);
