import Item from "../Item/Item";
import hocFilterProducts from "../../hoc/hocFilterProducts";


const ItemList = ({ products = []}) => {
    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <Item {...product} />
                </li>
            ))}
        </ul>

    );
};








const ItemListWhithSerch = hocFilterProducts(Item);



export { ItemList, ItemListWhithSerch }
