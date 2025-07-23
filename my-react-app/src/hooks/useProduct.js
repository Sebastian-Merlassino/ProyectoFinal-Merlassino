import { useState, useEffect } from "react";
// import { getProductById } from "../data/products";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../components/db/db";

const useProduct = (productId) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const getProduct = async (id) => {
    try {
      const docRef = doc(db, "products", productId);
      const dataDb = await getDoc(docRef);
      const data = { id: dataDb.id, ...dataDb.data() };

      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  };

useEffect(() => {
  getProduct();
},[]);




  // useEffect(() => {
  //   // getProductById(productId)
  //   //   .then((data) => {
  //   //     setProduct(data);
  //   //   })
  //   //   .finally(() => {
  //   //     setLoading(false);
  //   //   });
  // }, []);

  return { product, loading };
};

export default useProduct;
