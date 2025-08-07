import "./itemdetail.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product = {}, Agregar }) => {
  const { addProductInCart } = useContext(CartContext);
  const addProduct = (quantity) => {
    const productCart = { ...product, quantity }; 
//añadir producto al carrito con la cantidad seleccionada
    addProductInCart(productCart); 
  }

  return (
    <div className="item-detail-container">
      <Link to="/" className="btn btn-secondary">
        Volver
      </Link>
      <div className="card mb-3 item-detail">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={product.image}
              className="img-fluid rounded-start"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Precio: ${product.price}</p>
              <p className="card-text">Stock: {product.stock}</p>
              <ItemCount stock={product.stock} addProduct={addProduct} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
