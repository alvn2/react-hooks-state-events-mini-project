import React from "react";
import ReactDOM from "react-dom/client"; // Update this import
import App from "./components/App";
import "./index.css"

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // Create a root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
