import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import "./styles.css";

export function PedidoEditar() {
  const lista_clientes = [
    {
      id_cliente: 1,
      nome: "99 Coders",
    },
    {
      id_cliente: 2,
      nome: "Mercado Central",
    },
  ];

  const cond_pagtos = [
    { id_cond_pagto: 1, cond_pagto: "30 Dias" },
    { id_cond_pagto: 2, cond_pagto: "45 Dias" },
  ];

  const produtos = [
    {
      id_item: 1,
      id_produto: 1,
      descricao: "Monitor Dell",
      qtd: 2,
      vl_unit: 510,
      vl_total: 1020,
    },
    {
      id_item: 2,
      id_produto: 2,
      descricao: "HD Seagate 2TB",
      qtd: 2,
      vl_unit: 300,
      vl_total: 600,
    },
  ];

  const total_pedido = 5000;

  const lista_produtos = [
    { id_item: 1, id_produto: 1, descricao: "Monitor Dell" },
    { id_item: 2, id_produto: 2, descricao: "HD Seagate 2TB" },
    { id_item: 3, id_produto: 3, descricao: "Mouse Logitech" },
  ];
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-page form-pedido-editar">
        <div className="row col-lg-6 offset-lg-3">
          <div className="col-12 mb-4 mt-2">
            <h2 className="d-inline">Pedidos</h2>
          </div>

          <div className="col-md-8 mb-4">
            <label htmlFor="InputNome" className="form-label">
              Cliente
            </label>
            <div className="form-control mb-2">
              <select name="clientes" id="clientes">
                {lista_clientes.map((c) => {
                  return (
                    <option key={c.id_cliente} value={c.id_cliente}>
                      {c.nome}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <label htmlFor="InputEmail" className="form-label">
              Data Venda
            </label>
            <input
              type="text"
              className="form-control"
              id="InputEmail"
              aria-describedby="email"
            />
          </div>

          <div className="col-md-8 mb-4">
            <label htmlFor="cond_pagto" className="form-label">
              Cond. Pagamento
            </label>
            <div className="form-control mb-2">
              <select name="cond_pagto" id="cond_pagto">
                {cond_pagtos.map((c) => {
                  return (
                    <option key={c.id_cond_pagto} value={c.id_cond_pagto}>
                      {c.cond_pagto}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <label htmlFor="InputEntrega" className="form-label">
              Previsao de Entrega
            </label>
            <input
              type="text"
              className="form-control"
              id="InputEntrega"
              aria-describedby="email"
            />
          </div>

          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Produto</th>
                  <th scope="col">Qtd</th>
                  <th scope="col">Valor Unit.</th>
                  <th scope="col">Valor total</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((produto, index) => {
                  return (
                    <tr key={produto.id_item}>
                      <td>
                        <div className="form-control">
                          <select name="produtos" id="produtos">
                            <option value="0">Selecione Produto</option>
                            {lista_produtos.map((p) => {
                              return (
                                <option key={p.id_produto} value={p.id_produto}>
                                  {p.descricao}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>

                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" disabled />
                      </td>
                      <td>
                        <button type="button" className="btn btn-danger">
                          <i className="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="col-md-6">
            <button type="button" className="btn btn-sm btn-primary">
              Adicionar Produto
            </button>
          </div>

          <div className="col-md-6 text-end mb-5">
            <span className="me-4">Total Pedido:</span>
            <b>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(total_pedido)}
            </b>
          </div>

          <div className="col-12">
            <label htmlFor="InputNome" className="form-label">
              Obs
            </label>
            <textarea type="text" className="form-control" />
          </div>

          <div className="col-12 mt-3">
            <div>
              <div className="d-flex justify-content-end">
                <Link
                  to="/pedidos"
                  type="button"
                  className="btn btn-outline-primary me-4"
                >
                  Cancelar
                </Link>
                <button type="button" className="btn btn-success">
                  Salvar Dados
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
