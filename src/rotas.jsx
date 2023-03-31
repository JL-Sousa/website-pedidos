import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Dashboard } from "./pages/dashboard";
import { PedidoEditar } from "./pages/pedido-editar";
import { Pedidos } from "./pages/pedidos";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/pedidos/novo" element={<PedidoEditar />} />
      </Routes>
    </BrowserRouter>
  );
}
