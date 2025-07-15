import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemListWhithSearch } from "./components/ItemList/ItemList";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const agregarAlCarrito = () => setCartCount(cartCount + 1);

  return (
    <>
      <div className="app-container">
        <NavBar cartCount={cartCount} />

        <main className="main-content">
          {/* <ItemListContainer Agregar={agregarAlCarrito} /> */}
          <ItemListWhithSearch Agregar={agregarAlCarrito} />
        </main>

        <footer className="footer">
          <p>© 2025 Gestión SySO. Todos los derechos reservados.</p>
        </footer>
      </div>
    </>
  );
}

export default App;

// npm create vite@latest my-react-app -- --template react
// cd my-react-app
// npm install
// npm run dev
