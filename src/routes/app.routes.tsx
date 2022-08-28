import { Route, Routes } from "react-router-dom";
import { Orders } from "../pages/Orders";
import { Products } from "../pages/Products";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/pedidos" element={<Orders />} />
      <Route path="/produtos" element={<Products />} />
    </Routes>
  );
}
