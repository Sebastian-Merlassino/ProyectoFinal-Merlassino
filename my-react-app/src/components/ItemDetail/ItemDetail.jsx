import "./itemdetail.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product = {}, Agregar }) => {
  const addProductToCart = (quantity) => {
    const productCart = { ...product, quantity };
    console.log("Producto agregado al carrito:", productCart);

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
              <p>Precio: ${product.price}</p>
              <p>Stock: {product.stock}</p>
              <ItemCount stock={product.stock} addProductToCart={addProductToCart} />
              <button className="btn btn-primary" onClick={Agregar}>
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
