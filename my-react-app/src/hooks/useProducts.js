
import { useEffect, useState } from "react";
import {getProducts} from "../data/products";

const useProducts = (category) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getProducts().then((data) => {
            if (category) {
                const filteredProducts = data.filter(
                    (product) => product.category === category
                );
                setProducts(filteredProducts);
            } else {
                setProducts(data);
            }
        })
        .finally(() => {
            setLoading(false);
        });
    }, [category]);

    return { products, loading };
}


export default useProducts;