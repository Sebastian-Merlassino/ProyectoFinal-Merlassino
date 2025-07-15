import { useState } from "react";
import useProducts from "../hooks/useProducts";
import "./hocFilterProducts.css";
import Loading from "../components/Loading/Loading";

const hocFilterProducts = (Component) => {
  return function ({ Agregar }) {
    const [query, setQuery] = useState("");
    const { products, loading, error } = useProducts();

    const changeInput = (event) => {
      setQuery(event.target.value.toLowerCase());
    };

    const search = (productsList) => {
      const filterProducts = productsList.filter((product) => {
        return product.name.toLowerCase().includes(query);
      });

      return filterProducts;
    };

    return (
      <>
        <div className="item-list-container">
          <h1>Bienvenidos a la tienda de Gestión SySO</h1>
          <h2>Productos Disponibles</h2>

          <form className="d-flex search" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
              onChange={changeInput}
            />
            <button className="btn btn-outline-secondary" type="submit">
              Buscar
            </button>
          </form>
        </div>
        {loading ? (
        <Loading />
      ) : (
        <Component products={search(products)} Agregar={Agregar} />
      )}
        
      </>
    );
  };
};
export default hocFilterProducts;
