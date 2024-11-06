import React, { useState } from "react";
import DatosPerfil from "./DatosPerfil";
import HistorialPedidos from "./HistorialPedidos";
import "./Perfil.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

type ActiveComponent = "DatosPerfil" | "HistorialPedidos";

const Perfil: React.FC = () => {
  const [activeComponent, setActiveComponent] =
    useState<ActiveComponent>("DatosPerfil");

  return (
    <div className="perfil-container">
      <section className="sidebar">
        <a href="#" onClick={() => setActiveComponent("DatosPerfil")}>
          <FontAwesomeIcon icon={faUser} />

          <span className="user-profile">Perfil de Usuario</span>
        </a>

        <a
          href="#"
          onClick={() => {
            setActiveComponent("HistorialPedidos");
          }}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="order-history">Historial de Pedidos</span>
        </a>
      </section>

      <div className="content">
        {activeComponent === "DatosPerfil" && <DatosPerfil />}
        {activeComponent === "HistorialPedidos" && <HistorialPedidos />}
      </div>
    </div>
  );
};

export default Perfil;
