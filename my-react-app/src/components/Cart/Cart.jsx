import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cart, totalPrice, removeProductByID, clearCart } =
    useContext(CartContext);
  // Si el carrito está vacío, seguir comprando
  if (cart.length === 0) {
    return (
      <div className="empty-cart container text-center my-5">
        <h2>Tu carrito está vacío 🛒</h2>
        <Link to="/" className="btn btn-primary">
          Seguir comprando
        </Link>
      </div>
    );
  }


  return (
    <div className="container my-5">
      <h2 className="mb-4">Tu carrito 🛒</h2>
      <Link to="/" className="btn btn-secondary mb-4">
        Volver
      </Link>

      <div className="cart-items-list">
        {cart.map((productCart) => (
          <div
            key={productCart.id}
            className="card mb-3 shadow-sm mx-auto"
            style={{ maxWidth: "540px" }}
          >
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <img
                  src={productCart.image}
                  alt={productCart.name}
                  className="img-fluid rounded-start"
                  style={{ objectFit: "cover", height: "100%" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{productCart.name}</h5>
                  <p className="card-text mb-1">Precio unitario: ${productCart.price}</p>
                  <p className="card-text mb-1">Cantidad: {productCart.quantity}</p>
                  <p className="card-text mb-1 fw-bold">
                    Total del producto: ${productCart.price * productCart.quantity}
                  </p>
                  <button
                    className="btn btn-sm btn-danger mt-2"
                    onClick={() => removeProductByID(productCart.id)}
                  >
                    🗑️ Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-end mt-5">
        <h4>
          Total de la compra: <strong>${totalPrice()}</strong>
        </h4>
        <div className="d-flex justify-content-end gap-3 mt-3">
          <Link to="/checkout" className="btn btn-success">
            Finalizar compra
          </Link>
          <button className="btn btn-outline-danger" onClick={clearCart}>
            Vaciar carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;