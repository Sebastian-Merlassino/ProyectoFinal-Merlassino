import "./navbar.css";
import gestionSysoLogo from "../../assets/Logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const NavBar = () => {
  const {cart} = useContext(CartContext);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

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
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Servicios
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle active"
              to="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Tienda
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/Tienda/Cascos de seguridad">
                  Cascos de seguridad
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/Tienda/Protección ocular">
                  Protección ocular
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/Tienda/Protección auditiva">
                  Protección auditiva
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Contacto
            </Link>
          </li>
        </ul>

        <CartWidget count={cartCount} />
      </div>
    </nav>
  );
};

export default NavBar;
