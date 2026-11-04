import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";
// Route transitions own scrolling, including repeated links to the current page.
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
