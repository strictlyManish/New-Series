import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "./Wrapper.jsx";

createRoot(document.getElementById("root")).render(
  <Wrapper>
    <StrictMode>
      <BrowserRouter>
        <App />
        <ToastContainer theme="dark" />
      </BrowserRouter>
    </StrictMode>
  </Wrapper>
);
