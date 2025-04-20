import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import AppRoutes from "./routes.tsx";

import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-center" reverseOrder={true} />

    <AppRoutes />
  </StrictMode>
);
