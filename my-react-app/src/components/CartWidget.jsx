import "./cartwidget.css";
import shoppingCartIcon from '../assets/shopping-cart.png';

const CartWidget = ({count}) => {
  return (
    <div className="cart-widget">
      <img className="cart-widget-icon" src={shoppingCartIcon} alt="Cart Icon" />
      <span className="cart-count">{count}</span>
    </div>
  );
}

export default CartWidget;