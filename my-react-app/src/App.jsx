import './App.css'
import NavBar from './components/NavBar'
import ListOfProducts from './components/ListOfProducts'


function App() {


  return (
    
    <div className="app-container">
      <NavBar />
      <ListOfProducts />

      
      <footer className="footer">
        <p>© 2023 Gestión SySO. Todos los derechos reservados.</p>
      </footer>
      

       
    </div>

  )
}

export default App
