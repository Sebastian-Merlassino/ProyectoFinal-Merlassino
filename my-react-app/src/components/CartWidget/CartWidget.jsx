import "./cartwidget.css";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);


  return (
    <div className="cart-widget">
      <TiShoppingCart className="cart-widget-icon"/>
      <span className="cart-count">{totalQuantity()}</span>
    </div>
  );
}

export default CartWidget;