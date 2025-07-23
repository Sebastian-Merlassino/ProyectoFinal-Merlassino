import { useEffect, useState } from "react";
import { getProducts } from "../data/products";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../components/db/db";

const useProducts = (category) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        try {
            const dataDb = await getDocs(collection(db, "products"));
            const data = dataDb.docs.map((productDb) => {
                return {
                    id: productDb.id,
                    ...productDb.data(),
                };
            });
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    };

    const getProductsByategory = async () => {
        try {
            const q = query(
                collection(db, "products"),
                where("category", "==", category)
            );
            const dataDb = await getDocs(q);
            const data = dataDb.docs.map((productDb) => {
                return {
                    id: productDb.id,
                    ...productDb.data(),
                };
            });
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching products by category:", error);
            throw error;
        }
    };
    useEffect(() => {
        setLoading(true);
        if (category) {
            getProductsByategory();
        } else {
            getProducts();
        }
    }, [category]);

    // useEffect(() => {
    //     setLoading(true);
    //     getProducts().then((data) => {
    //         if (category) {
    //             const filteredProducts = data.filter(
    //                 (product) => product.category === category
    //             );
    //             setProducts(filteredProducts);
    //         } else {
    //             setProducts(data);
    //         }
    //     })
    //     .finally(() => {
    //         setLoading(false);
    //     });
    // }, [category]);

    return { products, loading };
};

export default useProducts;
