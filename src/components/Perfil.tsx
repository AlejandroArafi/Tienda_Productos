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

  const handleProfileClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveComponent("DatosPerfil");
  };

  const handleHistoryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveComponent("HistorialPedidos");
  };

  return (
    <div className="perfil-container">
      <section className="sidebar">
        <a href="#" onClick={handleProfileClick}>
          <FontAwesomeIcon icon={faUser} className="user-icon-sidebar" />
          <span className="user-profile">Perfil de Usuario</span>
        </a>

        <a href="#" onClick={handleHistoryClick}>
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="cart-icon-sidebar"
          />
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
