import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [ cart, setCart ] = useState([]);
    const addProductInCart = (product) => {
        setCart([...cart, product]); //revisa que habia en el carrito para no sobre escribir (...cart)) y luego agrega el producto
    };  

    const totalQuantity = () => {
       const total = cart.reduce((total, product) => total + product.quantity, 0); //calcula la cantidad total de productos en el carrito
       return total;
    };
    console.log("Cantidad total de productos en el carrito:", totalQuantity); //para ver la
    console.log("Carrito actualizado:", cart); //para ver el carrito actualizado en la consola

    return (
        <CartContext.Provider value={{ cart, addProductInCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
};

export { CartContext, CartProvider };