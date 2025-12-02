import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Products } from "./screens/Products";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Products />
  </StrictMode>,
);
