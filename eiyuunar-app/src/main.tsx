import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import RouterConfig from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  </StrictMode>,
);
