import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { Bounce, ToastContainer } from "react-toastify";

import AppRoutes from "./routes.tsx";

import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />

    <AppRoutes />
  </StrictMode>
);
