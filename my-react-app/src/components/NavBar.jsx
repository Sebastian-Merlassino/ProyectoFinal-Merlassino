import "./navbar.css";
import gestionSysoLogo from "../assets/Logo.png";
import shopingCartIcon from "../assets/shopping-cart.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="#" title="Gestión SySO" className="navbar-brand">
        <img className="navbar-logo"
          src={gestionSysoLogo}
          alt="Logotipo de Gestión SySO"
        />
      </a>

      <div className="d-flex align-items-center gap-4">
        <ul className="nav nav-underline mb-0">
          <li className="nav-item">
            <a className="nav-link" href="../index.html">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/views/nosotros.html">
              Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/views/servicios.html">
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Tienda
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/views/contacto.html">
              Contacto
            </a>
          </li>
        </ul>


        <CartWidget />

      </div>
    </nav>
  );
};

export default NavBar;
