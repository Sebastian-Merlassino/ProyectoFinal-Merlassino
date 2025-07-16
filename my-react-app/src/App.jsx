import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemListWhithSearch } from "./components/ItemList/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const agregarAlCarrito = () => setCartCount(cartCount + 1);

  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar cartCount={cartCount} />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<ItemListWhithSearch Agregar={agregarAlCarrito} />}
            />
            <Route
              path="/item/:id"
              element={<ItemDetailContainer Agregar={agregarAlCarrito} />}
            />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 Gestión SySO. Todos los derechos reservados.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

// npm create vite@latest my-react-app -- --template react
// cd my-react-app
// npm install
// npm run dev
