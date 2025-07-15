import Item from "../Item/Item";
import hocFilterProducts from "../../hoc/hocFilterProducts";

const ItemList = ({ products = [], Agregar }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <Item product={product} key={product.id} Agregar={Agregar} />
      ))}
    </div>
  );
};

const ItemListWhithSearch = hocFilterProducts(ItemList);

export {ItemList, ItemListWhithSearch};
