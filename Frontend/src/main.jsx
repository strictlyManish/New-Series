import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Store from "./store/Store.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <>
    <Provider stre={Store}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  </>
);
