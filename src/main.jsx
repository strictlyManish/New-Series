import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./context/Context";

createRoot(document.getElementById("root")).render(
  <>
    <Context>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Context>
  </>
);
