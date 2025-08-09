import { Link } from "react-router-dom";
import "./formcheckout.css";

const FormCheckout = ({ dataForm, handleInputChange, sendOrder }) => {
    return (
        <div className="checkout-container container my-4">
            <form className="row g-3" onSubmit={sendOrder}>
                <div className="col-md-12">
                    <label htmlFor="fullname" className="form-label">
                        Nombre y Apellido
                    </label>
                    <input
                        id="fullname"
                        name="fullname"
                        type="text"
                        className="form-control"
                        value={dataForm.fullname || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                        Email
                    </label>
                    <input
                        id="inputEmail4"
                        name="email"
                        type="email"
                        className="form-control"
                        value={dataForm.email || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                        Teléfono
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="form-control"
                        value={dataForm.phone || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                        Dirección
                    </label>
                    <input
                        id="inputAddress"
                        name="address"
                        type="text"
                        className="form-control"
                        placeholder="Av. Siempre Viva 742"
                        value={dataForm.address || ""}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">
                        Provincia
                    </label>
                    <select
                        id="inputState"
                        name="state"
                        className="form-select"
                        value={dataForm.state || ""}
                        onChange={handleInputChange}
                    >
                        <option value="">Elegí...</option>
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Santa Fe">Santa Fe</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                        Ciudad
                    </label>
                    <input
                        id="inputCity"
                        name="city"
                        type="text"
                        className="form-control"
                        value={dataForm.city || ""}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">
                        CP
                    </label>
                    <input
                        id="inputZip"
                        name="zip"
                        type="text"
                        className="form-control"
                        value={dataForm.zip || ""}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="col-12 d-flex gap-2">
                    <Link to="/" className="btn btn-secondary">
                        Seguir comprando
                    </Link>
                    <Link to="/cart" className="btn btn-primary">
                        Volver al carrito
                    </Link>
                    <button type="submit" className="btn btn-success">
                        Finalizar compra
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormCheckout;
