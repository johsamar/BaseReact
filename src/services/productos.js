const listaProductos = [
  {
    id: 1,
    titulo: "Bandeja Paisa",
    precio: 12000,
    descripcion:"Plato tipico colombiano con carne, chorizo, huevo, aguacate, chicharron, platano maduro, arroz, etc.",
    tipo: "Plato",
    imagen:"https://www.saborusa.com/wp-content/uploads/2021/02/5-comidas-tipicas-colombianas..._1.png",
    puntuacion: 4.3,
  },
  {
    id: 2,
    titulo: "Dedos",
    precio: 1300,
    descripcion: "Dedo relleno con queso y bocadillo",
    tipo: "Acompañantes",
    imagen:"https://cdn0.recetasgratis.net/es/posts/2/3/8/tequenos_de_queso_y_guayaba_56832_orig.jpg",
    puntuacion: 4.8,
  },
  {
    id: 3,
    titulo: "Empanadas",
    precio: 1000,
    descripcion:"Empanadas rellenas de carne y papas, viene con salsas a elección o ají",
    tipo: "Acompañantes",
    imagen:"https://www.viajabonito.mx/wp-content/uploads/2021/06/Comida-colombiana-Empanadas-04.jpg",
    puntuacion: 4.5,
  },
  {
    id: 4,
    titulo: "Kumis",
    precio: 3000,
    descripcion:"Empanadas rellenas de carne y papas, viene con salsas a elección o ají",
    tipo: "Bebidas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/6/68/Kumis.jpg",
    puntuacion: 3.8,
  },
];

const getProductos = async () => {
  return listaProductos;
}

export { getProductos }