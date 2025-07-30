import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, removeProductByID, clearCart } =
    useContext(CartContext);
  // Si el carrito está vacío, seguir comprando
  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Tu carrito está vacío 🛒</h2>
        <Link to="/" className="btn btn-primary">
          Seguir comprando
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((productCart) => (
        <div key={productCart.id} className="cart-item">
          <h3>{productCart.name}</h3>
          <img src={productCart.image} alt="" />
          <p>Precio unitario: ${productCart.price}</p>
          <p>Cantidad: {productCart.quantity}</p>
          <p>Total del producto: ${productCart.price * productCart.quantity}</p>
          <button
            className="btn btn-danger"
            onClick={() => removeProductByID(productCart.id)}
          >
            Eliminar
          </button>
        </div>
      ))}

      <p>Total: ${totalPrice()}</p>

      <Link to="/checkout">Continuar con la compra</Link>
      <button className="btn btn-danger" onClick={() => clearCart()}>
        Vaciar carrito
      </button>
    </div>
  );
};

export default Cart;
