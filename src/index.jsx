// React Core Imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// CSS Imports
import "./styles/index.css";

// Root Component
import App from "./App.jsx";

// Initialize and render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);