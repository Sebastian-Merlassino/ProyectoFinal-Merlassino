const products = [
  {
    id: 1,
    name: "Casco de seguridad Milenium class S/V",
    description: "Description for Product 1",
    price: 29.99,
    image: "/img/casco-seguridad-milenium-class-amarillo.jpg",
    category: "Cascos de seguridad",
  },
  {
    id: 2,
    name: "Casco MILENIUM class S/V con visor T",
    description: "Description for Product 2",
    price: 39.99,
    image: "/img/casco-seguridad-milenium-class-visor.jpg",
    category: "Cascos de seguridad",
  },
  {
    id: 3,
    name: "Casco de seguridad Milenium Class Full Brim",
    description: "Description for Product 3",
    price: 49.99,
    image: "/img/casco-seguridad-milenium-class-full-brim.jpg",
    category: "Cascos de seguridad",
  },
  {
    id: 4,
    name: "Anteojo de seguridad Argon Elite",
    description: "Description for Product 4",
    price: 29.99,
    image: "/img/anteojo-seguridad-argon-elite-transparente.jpg",
    category: "Protección ocular",
  },
  {
    id: 5,
    name: "Anteojos de seguridad Argon",
    description: "Description for Product 5",
    price: 39.99,
    image: "/img/anteojo-seguridad-argon-transparente.jpg",
    category: "Protección ocular",
  },
  {
    id: 6,
    name: "Antiparra de seguridad New Classic",
    description: "Description for Product 6",
    price: 49.99,
    image: "/img/antiparra-seguridad-new-classic-transparente.jpg",
    category: "Protección ocular",
  },
  {
    id: 7,
    name: "Protector Auditivo QUANTUM FOAM RD Con Cordel Detectable",
    description: "Description for Product 7",
    price: 29.99,
    image: "/img/quantum-foam-rd.jpg",
    category: "Protección auditiva",
  },
  {
    id: 8,
    name: "Protector Auditivo de copa L-320",
    description: "Description for Product 8",
    price: 39.99,
    image: "/img/l-300-08.jpg",
    category: "rotección auditiva",
  },
  {
    id: 9,
    name: "Protector Auditivo de Copa L-340 para casco",
    description: "Description for Product 9",
    price: 49.99,
    image: "/img/l-300-13.jpg",
    category: "Protección auditiva",
  },
];

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};

export default getProducts;
