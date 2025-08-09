import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../db/db";
import FormCheckout from "../FormCheckout/FormCheckout";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Checkout = () => {
    const [dataForm, setDataForm] = useState({
  fullname: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
    });

    const [orderID, setOrderID] = useState(null);
    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const navigate = useNavigate();
    const handleInputChange = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    };

    const sendOrder = (event) => {
        event.preventDefault(); //evita que el formulario recargue la página al hacer submit.

        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            total: totalPrice(),
            createdAt: new Date(),
        };

        uploadOrder(order);
        //enviar la orden a Firebase
    };

    const uploadOrder = async (order) => {
        try {
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, order);
            setOrderID(response.id);
            await Swal.fire({
                title: "¡Compra realizada!",
                html: `Tu pedido fue confirmado.<br/><b>ID:</b> ${response.id}`,
                icon: "success",
                confirmButtonText: "Volver a la tienda",
                confirmButtonColor: "#0d6efd",
            });
            clearCart(); // limpiar carrito
            navigate("/"); // volver al indice
        } catch (error) {
            console.error("Error al guardar la orden:", error);
            Swal.fire({
                title: "Hubo un problema",
                text: "No pudimos procesar tu compra. Intentá nuevamente.",
                icon: "error",
                confirmButtonText: "Entendido",
            });
        }
    };

    return (
        <div className="checkout-container">
            <FormCheckout
                dataForm={dataForm}
                handleInputChange={handleInputChange}
                sendOrder={sendOrder}
            />
        </div>
    );
};

export default Checkout;
