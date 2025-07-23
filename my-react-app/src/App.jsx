import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemListWhithSearch } from "./components/ItemList/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const agregarAlCarrito = () => setCartCount(cartCount + 1);

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app-container">
          <NavBar cartCount={cartCount} />

          <main className="main-content">
            <Routes>
              <Route
                path="/"
                element={<ItemListWhithSearch Agregar={agregarAlCarrito} />}
              />
              <Route
                path="/detail/:productId"
                element={<ItemDetailContainer Agregar={agregarAlCarrito} />}
              />
              <Route path="/Tienda/:category" element={<ItemListWhithSearch Agregar={agregarAlCarrito} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route
                path="*"
                element={
                  <div style={{ padding: "2rem", textAlign: "center" }}>
                    <h1>404</h1>
                    <h2>Página no encontrada</h2>
                    <p>Lo sentimos, la página que buscas no existe.</p>
                  </div>
                }
              />
            </Routes>
          </main>

          <footer className="footer">
            <p>© 2025 Gestión SySO. Todos los derechos reservados.</p>
          </footer>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

// npm create vite@latest my-react-app -- --template react
// cd my-react-app
// npm install
// npm run dev
