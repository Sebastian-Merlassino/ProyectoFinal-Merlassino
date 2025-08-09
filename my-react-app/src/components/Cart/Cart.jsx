import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "./cart.css";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, totalPrice, removeProductByID, clearCart } =
    useContext(CartContext);
  // Si el carrito está vacío, seguir comprando
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      Swal.fire({
        title: "Tu carrito está vacío 🛒",
        text: "Agrega productos para continuar con tu compra",
        icon: "info",
        confirmButtonText: "Seguir comprando",
        confirmButtonColor: "#0d6efd",
      }).then(() => {
        navigate("/");
      });
    }
  }, [cart, navigate]);

  // Si no hay productos, no renderiza nada
  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Tu carrito 🛒</h2>

      <div className="cart-items-list">
        {cart.map((productCart) => (
          <div key={productCart.id} className="card mb-3 shadow-sm cart-card">
            <div className="row g-0">
              <div className="col-md-4 cart-img-container">
                <img
                  src={productCart.image}
                  alt={productCart.name}
                  className="img-fluid rounded-start cart-img"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body cart-card-body">
                  <h5 className="card-title">{productCart.name}</h5>
                  <p className="card-text mb-1">
                    Precio unitario: ${productCart.price}
                  </p>
                  <p className="card-text mb-1">
                    Cantidad: {productCart.quantity}
                  </p>
                  <p className="card-text mb-1 fw-bold">
                    Total del producto: $
                    {productCart.price * productCart.quantity}
                  </p>
                  <div className="d-grid gap-3 d-md-flex">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      Swal.fire({
                        title: "¿Eliminar producto?",
                        text: "Esta acción no se puede deshacer",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#d33",
                        cancelButtonColor: "#6c757d",
                        confirmButtonText: "Sí, eliminar",
                        cancelButtonText: "Cancelar",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          removeProductByID(productCart.id);
                          Swal.fire({
                            title: "Eliminado",
                            text: "El producto fue eliminado del carrito",
                            icon: "success",
                            timer: 1500,
                            showConfirmButton: false,
                          });
                        }
                      });
                    }}
                  >
                    🗑️ Eliminar
                  </button>
                  <Link to="/" className="btn btn-primary">
                    Seguir comprando
                  </Link>
                  </div>
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
