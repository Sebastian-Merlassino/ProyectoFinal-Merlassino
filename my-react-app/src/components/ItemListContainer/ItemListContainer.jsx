import "./itemlistcontainer.css";
import getProducts from "../../data/products";
import Item from "../Item/Item";
import { useEffect, useState } from "react";

const ItemListContainer = ({ Agregar }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="item-list-container">
      <h1>Bienvenidos a la tienda de Gestión SySO</h1>
      <h2>Productos Disponibles</h2>
      <div className="product-list">
      {products.map((product) => (
        <Item product={product} key={product.id} Agregar={Agregar} />
      ))}
      </div>

    </div>
  );
};

export default ItemListContainer;
