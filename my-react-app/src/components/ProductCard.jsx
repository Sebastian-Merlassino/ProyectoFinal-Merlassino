import "./productcard.css";
import cascoImg from "../assets/casco.png";

const ProductCard = ({ Agregar }) => {
  return (
    <div className="card">
      <img src={cascoImg} className="card-img-top" alt="Casco de Seguridad" />
      <div className="card-body">
        <h5 className="card-title">Casco de Seguridad 3M</h5>
        <p className="card-text">
          El Casco de seguridad H-700 de 3M está diseñado para brindar
          protección, equilibrio y comodidad, protegiendo contra pequeños
          objetos que puedan caer e impactar la parte superior del casco. Entre
          los modelos disponibles, se encuentra el sensor Uvicator ™, que cambia
          de color al exponerse a la luz UV. El H-700 está fabricado en
          polietileno moldeado de alta densidad, lo que le proporciona
          resistencia al impacto.
        </p>
        <button className="btn btn-primary" onClick={Agregar}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
