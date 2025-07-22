import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    // Función para agregar un producto al carrito
    const addProductInCart = (product) => {
        // Busca si el producto ya existe en el carrito (por ID)
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {

            setCart(cart.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
            ));
        } else {

            setCart([...cart, { ...product, quantity: product.quantity }]);
        }

    };
//calcula la cantidad total de productos en el carrito
    const totalQuantity = () => {
        const total = cart.reduce((total, product) => total + product.quantity, 0);
        return total;
    };

    const totalPrice = () => {
        const total = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
        return total;
    };

    const removeProductByID = (id) => {
        const productFilter = cart.filter((product)=> product.id !== id);
        setCart(productFilter);
    }

    //vaciar carrito
    const clearCart = () => {
        setCart([]);
    };


    return (
        <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, removeProductByID, clearCart }}>
            {children}
        </CartContext.Provider>
    )
};

export { CartContext, CartProvider };