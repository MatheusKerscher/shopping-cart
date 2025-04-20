import { BrowserRouter, Route, Routes } from "react-router-dom";

import CartProvider from "./contexts/CartContext";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Product from "./pages/Product";

function AppRoutes() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
