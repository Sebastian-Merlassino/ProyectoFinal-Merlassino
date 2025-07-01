import "./cartwidget.css";
import shoppingCartIcon from '../../assets/shopping-cart.png';
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