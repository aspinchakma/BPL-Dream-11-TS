import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContextProvider from "./components/Context/ContextProvider.tsx";
import "./index.css";
import Home from "./pages/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextProvider>
      <Home />
    </ContextProvider>
  </StrictMode>,
);
