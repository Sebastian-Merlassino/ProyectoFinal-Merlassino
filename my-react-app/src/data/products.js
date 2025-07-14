const products = [
  {
    id: 1,
    nombre: "Product 1",
    descripcion: "Description for Product 1",
    precio: 29.99,
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    nombre: "Product 2",
    descripcion: "Description for Product 2",
    precio: 39.99,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    nombre: "Product 3",
    descripcion: "Description for Product 3",
    precio: 49.99,
    imagen: "https://via.placeholder.com/150"
  }
];

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};

export default getProducts;