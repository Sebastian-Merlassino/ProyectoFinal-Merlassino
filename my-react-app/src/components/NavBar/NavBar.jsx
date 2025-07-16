import "./navbar.css";
import gestionSysoLogo from "../../assets/Logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <Link to="/" title="Gestión SySO" className="navbar-brand">
        <img
          className="navbar-logo"
          src={gestionSysoLogo}
          alt="Logotipo de Gestión SySO"
        />
      </Link>

      <div className="d-flex align-items-center gap-4 nav-items-container">
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
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle active"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Tienda
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/Cascos de seguridad">
                  Cascos de seguridad
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/Protección ocular">
                  Protección ocular
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/Protección auditiva">
                  Protección auditiva
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/views/contacto.html">
              Contacto
            </a>
          </li>
        </ul>

        <CartWidget count={cartCount} />
      </div>
    </nav>
  );
};

export default NavBar;
