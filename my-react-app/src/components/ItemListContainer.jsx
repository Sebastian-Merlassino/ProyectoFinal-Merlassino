import "./itemlistcontainer.css";
import ProductCard from "./ProductCard";

const ItemListContainer = ({ saludo, Agregar }) => {
  return (
    <div className="item-list-container">
      <h2>{saludo}</h2>
      <div className="product-card">
        <ProductCard Agregar={Agregar} />
      </div>
    </div>
  );
};

export default ItemListContainer;
