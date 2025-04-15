import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TranslateContextProvider } from "./services/traslationContext/traslation.context.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TranslateContextProvider>
      <App />
    </TranslateContextProvider>
  </StrictMode>
);
