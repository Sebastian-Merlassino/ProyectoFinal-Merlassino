import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        email: "",
        phone: "",
    })
    const { cart, totalPrice } = useContext(CartContext);
    const handleInputChange = (event) => {
        setDataForm({...dataForm,[event.target.name]: event.target.value})

    }

    const sendOrder = (event) => {
        event.preventDefault();
        console.log("Datos del formulario:", dataForm);

        const order = {
            buyer: {...dataForm},
            products: [...cart],
            total: totalPrice()
        }
        console.log("Orden de compra:", order);
    }

  return (
    <div>
        <form>
            <input
                type="text"
                name="fullname"
                value={dataForm.fullname}
                onChange={handleInputChange}
            />
            <input
                type="email"
                name="email"
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
  )
}

export default Checkout