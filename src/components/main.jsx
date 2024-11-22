import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../stylesheet/index.css";
import App from "../stylesheet/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
