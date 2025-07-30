import { Link } from "react-router-dom";


const   FormCheckout = ({ dataForm, handleInputChange, sendOrder }) => {
    return  (


        <div className="checkout-container">
            <form onSubmit={sendOrder}>
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
            </form>
        </div>
    );
};
export default FormCheckout;