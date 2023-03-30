import { Grafico } from "../../components/Grafico";
import { Navbar } from "../../components/Navbar";

export function Dashboard() {
  const dados_clientes = [
    ["Clientes", "Vendas"],
    ["Microsoft", 5200],
    ["IBM", 4900],
    ["Apple", 4200],
    ["Facebook", 2140],
    ["Google", 2140],
  ];

  const dados_vendas = [
    ["Mes", "Vendas"],
    ["1", 5200],
    ["2", 4900],
    ["3", 7200],
    ["4", 4900],
    ["5", 4900],
    ["6", 1900],
    ["7", 4900],
    ["8", 4210],
    ["9", 7630],
    ["10", 5630],
    ["11", 3630],
    ["12", 10630],
  ];

  const dados_produtos = [
    ["Produto", "Vendas"],
    ["Teclado", 5200],
    ["Monitor", 4900],
    ["HD", 4200],
    ["Fone", 3210],
    ["Webcam", 2140],
  ];

  const dados_cidades = [
    ["Cidade", "Vendas"],
    ["Sao Paulo", 5200],
    ["Rio de janeiro", 4900],
    ["Campinas", 4200],
    ["Curitiba", 3210],
    ["Bauru", 2140],
  ];
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-page">
        <div className="ms-4 d-flex justify-content-between">
          <h2>Dashboard</h2>
          <button className="btn btn-primary me-4">
            <i className="fas fa-plus"></i>Atualizar
          </button>
        </div>
        <div className="row">
          <div className="col-md-6 p-5">
            <Grafico
              titulo="Venda por clientes (top 5)"
              chartType="Bar"
              dados={dados_clientes}
              legenda={false}
            />
          </div>
          <div className="col-md-6 p-5">
            <Grafico
              titulo="Vendas anual"
              chartType="Line"
              dados={dados_vendas}
              legenda={false}
            />
          </div>
          <div className="col-md-6 p-5">
            <Grafico
              titulo="Venda por produto (top 5)"
              chartType="PieChart"
              dados={dados_produtos}
              legenda={true}
            />
          </div>
          <div className="col-md-6 p-5">
            <Grafico
              titulo="Venda por cidade"
              chartType="BarChart"
              dados={dados_cidades}
              legenda={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
