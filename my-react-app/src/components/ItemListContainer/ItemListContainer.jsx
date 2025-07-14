import "./itemlistcontainer.css";
import ProductCard from "../ProductCard";
import getProducts from "../../data/products";
import { useEffect, useState } from "react";

const ItemListContainer = ({ saludo, Agregar }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
      <div className="item-list-container">
        <h2>{saludo}</h2>
        {products.map((product) => (
          <div key={product.id}>
            <p>ID: {product.id}</p>
            <p>Nombre: {product.nombre}</p>
            <p>Descripción: {product.descripcion}</p>
            <p>Precio: {product.precio}</p>
            <p>Imagen: {product.imagen}</p>
          </div>
        ))}
        <div className="product-card">
          <ProductCard Agregar={Agregar} />
        </div>
      </div>
  );
};

export default ItemListContainer;
