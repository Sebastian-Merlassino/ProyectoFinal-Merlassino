import { useState, useEffect } from 'react';
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const agregarAlCarrito = () => setCartCount(cartCount + 1);
  const [toggle, setToggle] = useState(true);


  //sacar console.log de la app
  console.log("App component rendered");


//sacar el fetch de la app
  useEffect(() => {
      const fetchApi =  () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error("Error fetching data:", error));
  }
  fetchApi();
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

//sacar el console.log del toggle
  useEffect(() => {
    console.log("Toggle state changed:", toggle);
  }, [toggle]);

  return (
    <>
      <div className="app-container">
        <NavBar cartCount={cartCount} />
      </div>
      <main>
        <ItemListContainer saludo={ "Bienvenidos a la tienda de Gestión SySO" } Agregar={agregarAlCarrito}/>

{/* sacar el toggle de la app */}
        <div>
          <p>toggle: {toggle ? "ON" : "OFF"}</p>
          <button onClick={handleToggle}>
            {toggle ? "Desactivar" : "Activar"}
          </button>
        </div>


        <footer className="footer">
          <p>© 2025 Gestión SySO. Todos los derechos reservados.</p>
        </footer>
      </main>
    </>
  );
}

export default App;



// npm create vite@latest my-react-app -- --template react
// cd my-react-app
// npm install
// npm run dev
