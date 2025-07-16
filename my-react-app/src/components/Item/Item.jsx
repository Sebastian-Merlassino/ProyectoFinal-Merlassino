import "./item.css";

const Item = ({ product, Agregar }) => {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p>Precio: ${product.price}</p>
        <p>Más información</p>
        <button className="btn btn-primary" onClick={Agregar}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Item;
