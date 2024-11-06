import React from "react";
import "./HistorialPedidos.css";

type Pedido = {
  id: number;
  fecha: string;
  productos: string[];
  estado: string;
  total: string;
};

const HistorialPedidos: React.FC = () => {
  const pedidos: Pedido[] = [
    {
      id: 1,
      fecha: "2024-11-01",
      productos: ["Producto A", "Producto B"],
      estado: "Completado",
      total: "$50.000",
    },
    {
      id: 2,
      fecha: "2024-10-15",
      productos: ["Producto C"],
      estado: "Pendiente",
      total: "$20.000",
    },
  ];

  return (
    <div className="historial-pedidos-container">
      <h3 className="historial-pedidos-title">Historial de Pedidos</h3>
      <section className="historial-pedidos">
        <ul>
          {pedidos.map((pedido) => (
            <li key={pedido.id}>
              <p>
                <span>Fecha de compra:</span> {pedido.fecha}
              </p>
              <p>
                <span>Productos:</span> {pedido.productos.join(", ")}
              </p>
              <p>
                <span>Total: </span>
                {pedido.total}
              </p>
              <p>
                <span>Estado: </span> {pedido.estado}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HistorialPedidos;
