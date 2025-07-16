import { useState, useEffect } from "react";
import { getProductById } from "../data/products";

const useProduct = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(4)
      .then((data) => {
        setProduct(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { product, loading };
};

export default useProduct;
