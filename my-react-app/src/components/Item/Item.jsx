import "./item.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const Item = ({ product }) => {
  const {addProductInCart} = useContext(CartContext);

  const addProduct = (quantity) => {
    const productCart = { ...product, quantity };
    addProductInCart(productCart);
  };
  
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Precio: ${product.price}</p>

          <Link to={`/detail/${product.id}`} className="card-link">
            Más información
          </Link>
          <div className="item-count-container">
          <ItemCount stock={product.stock} addProduct={addProduct} />
          </div>
      </div>
    </div>
  );
};

export default Item;
