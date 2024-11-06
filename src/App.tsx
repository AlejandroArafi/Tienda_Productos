import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Uso de Routes
import { useCart } from "./hooks/useCart.ts";
import "./App.css";
import Header from "./components/Header.tsx";
import Guitar from "./components/Guitar.tsx";
import UserPage from "./pages/UserPage.tsx"; // Página para el usuario

function App() {
  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  } = useCart();

  return (
    <Router>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      {/* Aquí es donde colocamos las rutas */}
      <Routes>
        {/* Ruta principal de la aplicación (página de inicio) */}
        <Route
          path="/" // Ruta raíz (home)
          element={
            <main className="container-xl mt-5">
              <h2 className="text-center">Nuestra Colección</h2>
              <div className="row mt-5">
                {data.map((guitar) => (
                  <Guitar
                    key={guitar.id}
                    guitar={guitar}
                    addToCart={addToCart}
                  />
                ))}
              </div>
            </main>
          }
        />
        {/* Ruta para la página del usuario */}
        <Route path="/user" element={<UserPage />} /> {/* Página de usuario */}
      </Routes>

      {/* Footer global */}
      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
