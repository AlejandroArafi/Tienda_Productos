// src/pages/UserPage.tsx
import { useState } from "react";

import Perfil from "../components/Perfil";

export default function UserPage() {
  const [activeComponent, setActiveComponent] = useState<string>("Perfil");

  return (
    <div style={{ height: "100vh", backgroundColor: "white" }}>
      <Perfil />

      {/* page que funciona con los componentes de la barra de navegación (datosPerfil e historialPedidos) */}
    </div>
  );
}
