import "./cartwidget.css";
import shoppingCartIcon from '../assets/shopping-cart.png';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img className="cart-widget-icon" src={shoppingCartIcon} alt="Cart Icon" />
      <span className="cart-count">0</span>
    </div>
  );
}

export default CartWidget;