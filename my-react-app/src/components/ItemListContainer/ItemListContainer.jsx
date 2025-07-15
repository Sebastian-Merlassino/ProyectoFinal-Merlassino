import "./itemlistcontainer.css";
import useProducts from "../../hooks/useProducts";
import {ItemList} from "../ItemList/ItemList";
import Loading from "../Loading/Loading";

const ItemListContainer = ({ Agregar }) => {
  const { products, loading } = useProducts();

  return (
    <div className="item-list-container">
      <h1>Bienvenidos a la tienda de Gestión SySO</h1>
      <h2>Productos Disponibles</h2>
      {loading ? (
        <Loading />
      ) : (
        <ItemList products={products} Agregar={Agregar} />
      )}
    </div>
  );
};

export default ItemListContainer;
