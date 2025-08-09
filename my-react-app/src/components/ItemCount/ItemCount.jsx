import "./itemcount.css";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1);
    const handleClickDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const handleClickIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    return (
        <div className="item-count">
            <div className="counter-row">
                <button
                    className="btn btn-outline-secondary"
                    onClick={handleClickDecrement}
                >
                    -
                </button>
                <p className="count">{count}</p>
                <button
                    className="btn btn-outline-secondary"
                    onClick={handleClickIncrement}
                >
                    +
                </button>
            </div>
            <button
                onClick={() => {
                    addProduct(count);
                    toast.success("Producto agregado al carrito 🛒", {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }}
                className="btn btn-primary"
            >
                Añadir al carrito
            </button>
        </div>
    );
};

export default ItemCount;
