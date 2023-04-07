import { useEffect, useState } from "react";
import { Grafico } from "../../components/Grafico";
import { Navbar } from "../../components/Navbar";

export function Dashboard() {
  const [dadosClientes, setDadosClientes] = useState([]);
  const [dadosVendas, setDadosVendas] = useState([]);
  const [dadosProdutos, setDadosProdutos] = useState([]);
  const [dadosCidades, setDadosCidades] = useState([]);

  function graficoCliente() {
    setDadosClientes([
      ["Clientes", "Vendas"],
      ["Microsoft", 5200],
      ["IBM", 4900],
      ["Apple", 4200],
      ["Facebook", 2140],
      ["Google", 2140],
    ]);
  }

  function graficoVendas() {
    setDadosVendas([
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
    ]);
  }

  function graficoProdutos() {
    setDadosProdutos([
      ["Produto", "Vendas"],
      ["Teclado", 5200],
      ["Monitor", 4900],
      ["HD", 4200],
      ["Fone", 3210],
      ["Webcam", 2140],
    ]);
  }

  function graficoCidades() {
    setDadosCidades([
      ["Cidade", "Vendas"],
      ["Sao Paulo", 5200],
      ["Rio de janeiro", 4900],
      ["Campinas", 4200],
      ["Curitiba", 3210],
      ["Bauru", 2140],
    ]);
  }

  function montarGrafico() {
    graficoCliente();
    graficoVendas();
    graficoProdutos();
    graficoCidades();
  }

  useEffect(() => {
    montarGrafico();
  }, []);

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
              dados={dadosClientes}
              legenda={false}
            />
          </div>
          <div className="col-md-6 p-5">
            <Grafico
              titulo="Vendas anual"
              chartType="Line"
              dados={dadosVendas}
              legenda={false}
            />
          </div>
          <div className="col-md-6 p-5">
            <Grafico
              titulo="Venda por produto (top 5)"
              chartType="PieChart"
              dados={dadosProdutos}
              legenda={true}
            />
          </div>
          <div className="col-md-6 p-5">
            <Grafico
              titulo="Venda por cidade"
              chartType="BarChart"
              dados={dadosCidades}
              legenda={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
