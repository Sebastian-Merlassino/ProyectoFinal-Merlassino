import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
// import { Form } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../db/db";
import FormCheckout from "../FormCheckout/FormCheckout";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        email: "",
        phone: "",
    });


    const [orderID, setOrderID] = useState(null);
    const { cart, totalPrice } = useContext(CartContext);
    const handleInputChange = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    };

    const sendOrder = (event) => {
        event.preventDefault(); //evita que el formulario recargue la página al hacer submit.

        console.log("Datos del formulario:", dataForm);

        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            total: totalPrice(),
        };
        console.log("Orden de compra:", order);

        uploadOrder(order);
    //enviar la orden a Firebase
        console.log("Orden enviada:", order);
    };


    const uploadOrder = async (order) => {
        try {
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, order);
            setOrderID(response.id);
            console.log("Orden guardada con ID:", response.id);
        } catch (error) {
            console.error("Error al guardar la orden:", error);
        }
    };

    return (
        <div className="checkout-container">
            {/* <form onSubmit={sendOrder}>
                <input
                    type="text"
                    name="fullname"
                    placeholder="Nombre completo"
                    value={dataForm.fullname}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={dataForm.email}
                    onChange={handleInputChange}
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    value={dataForm.phone}
                    onChange={handleInputChange}
                />
                <button type="submit">Finalizar compra</button>
            </form> */}
            {orderID ? (
                <div className="order-confirmation">
                    <h2>¡Gracias por tu compra!</h2>
                    <p>Tu orden ha sido procesada con éxito.</p>
                    <p>ID de la orden: {orderID}</p>
                </div>
            ) : (
                <FormCheckout
                    dataForm={dataForm}
                    handleInputChange={handleInputChange}
                    sendOrder={sendOrder}
                />
            )}
        </div>
    );
};

export default Checkout;
