import useProduct from "../../hooks/useProduct";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./itemdetaicontainer.css";

const ItemDetailContainer = () => {
  const { product, loading } = useProduct();

    console.log(product);

  return (
    <div className="item-detail-container">
        {loading ? (
          <Loading />
        ) : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer