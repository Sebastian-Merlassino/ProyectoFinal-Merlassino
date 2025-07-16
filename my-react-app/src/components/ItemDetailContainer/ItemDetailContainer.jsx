import useProduct from "../../hooks/useProduct";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./itemdetaicontainer.css";
import { useParams } from "react-router-dom";


const ItemDetailContainer = ({ Agregar }) => {
  const { productId } = useParams();
  const { product, loading } = useProduct(productId);

    console.log(product);

  return (
    <div className="item-detail-container">
        {loading ? (
          <Loading />
        ) : <ItemDetail product={product} Agregar={Agregar} />}
    </div>
  );
};

export default ItemDetailContainer