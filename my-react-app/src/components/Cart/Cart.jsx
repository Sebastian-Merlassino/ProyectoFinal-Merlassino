import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart, totalPrice, removeProductByID, clearCart } = useContext(CartContext);

    return (
        <div>
            {cart.map((productCart) => (
                <div key={productCart.id} className="cart-item">
                    <h3>{productCart.name}</h3>
                    <img src={productCart.image} alt="" />
                    <p>Precio unitario: ${productCart.price}</p>
                    <p>Cantidad: {productCart.quantity}</p>
                    <p>Total del producto: ${productCart.price * productCart.quantity}</p>
                    <button className="btn btn-danger" onClick={() => removeProductByID(productCart.id)}>Eliminar</button>
                </div>
            ))}

            <p>Total: ${totalPrice()}</p>

            <button className="btn btn-danger" onClick={() => clearCart()}>Vaciar carrito</button>
        </div>
    )
}

export default Cart