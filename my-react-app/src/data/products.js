const products = [
  {
    id: 1,
    name: "Casco de seguridad Milenium class S/V",
    description: "Casco de seguridad Milenium Class diseñado para proteger la cabeza del impacto de objetos que caen libremente.",
    price: 29.99,
    image: "/img/casco-seguridad-milenium-class-amarillo.jpg",
    category: "Cascos de seguridad",
  },
  {
    id: 2,
    name: "Casco MILENIUM class S/V con visor T",
    description: "Casco de seguridad Milenium Class diseñado para proteger la cabeza del impacto de objetos que caen libremente.",
    price: 39.99,
    image: "/img/casco-seguridad-milenium-class-visor.jpg",
    category: "Cascos de seguridad",
  },
  {
    id: 3,
    name: "Casco de seguridad Milenium Class Full Brim",
    description: "Casco de seguridad para proteger la cabeza del impacto de objetos que caen libremente. Especialmente diseñado para utilizar en ambientes de trabajo muy exigentes. Una excelente solución de seguridad para personas que trabajan expuestos a ambientes de alto riesgo.",
    price: 49.99,
    image: "/img/casco-seguridad-milenium-class-full-brim.jpg",
    category: "Cascos de seguridad",
  },
  {
    id: 4,
    name: "Anteojo de seguridad Argon Elite",
    description: "El protector ocular Argon Elite está diseñado para proteger el ojo contra golpes, impacto de partículas, polvo y chispas. Brinda protección frontal y lateral.",
    price: 29.99,
    image: "/img/anteojo-seguridad-argon-elite-transparente.jpg",
    category: "Protección ocular",
  },
  {
    id: 5,
    name: "Anteojos de seguridad Argon",
    description: "El protector ocular Argon está diseñado para proteger el ojo contra golpes, impacto de partículas, polvo y chispas. Brinda protección frontal y lateral.",
    price: 39.99,
    image: "/img/anteojo-seguridad-argon-transparente.jpg",
    category: "Protección ocular",
  },
  {
    id: 6,
    name: "Antiparra de seguridad New Classic",
    description: "La antiparra de seguridad New Classic está diseñado para proteger el ojo contra golpes, impacto de partículas, polvo, chispas y salpicadura química. Brinda protección frontal y lateral.",
    price: 49.99,
    image: "/img/antiparra-seguridad-new-classic-transparente.jpg",
    category: "Protección ocular",
  },
  {
    id: 7,
    name: "Protector Auditivo QUANTUM FOAM RD Con Cordel Detectable",
    description: "El tapón endoaural Quantum Foam es un protector auditivo de inserción autoexpansible desechable con o sin cordón fabricado en espuma de poliuretano.",
    price: 29.99,
    image: "/img/quantum-foam-rd.jpg",
    category: "Protección auditiva",
  },
  {
    id: 8,
    name: "Protector Auditivo de copa L-320",
    description: "El protector auditivo de copa L-320 suministra protección de manera no invasiva, aislando el oído de la fuente de ruido. Su diseño ergonómico y adaptabilidad permite que pueda ser usado por la mayoría de los usuarios.",
    price: 39.99,
    image: "/img/l-300-08.jpg",
    category: "rotección auditiva",
  },
  {
    id: 9,
    name: "Protector Auditivo de Copa L-340 para casco",
    description: "El protector auditivo de copa L-340 para casco suministra protección de manera no invasiva, aislando el oído de la fuente de ruido. Su diseño ergonómico y adaptabilidad permite que pueda ser usado por la mayoría de los usuarios.",
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

const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id === productId);
      if (product) {
        resolve(product);
      } else {
        reject(new Error("Producto no encontrado"));
      }
    }, 3000);
  });
};

export { getProducts, getProductById };
