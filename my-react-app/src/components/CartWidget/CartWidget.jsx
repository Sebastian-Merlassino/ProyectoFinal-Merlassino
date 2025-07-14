import "./cartwidget.css";
import { TiShoppingCart } from "react-icons/ti";

const CartWidget = ({count}) => {
  return (
    <div className="cart-widget">
      <TiShoppingCart className="cart-widget-icon"/>
      <span className="cart-count">{count}</span>
    </div>
  );
}

export default CartWidget;