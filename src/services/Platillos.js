const listaPlatillos = [
    {
        id: 1,
        nombre: 'Tacos',
        precio: 20,
        descripcion: 'Tacos de carne asada',
        imagen: 'https://www.pequerecetas.com/wp-content/uploads/2020/10/tacos-mexicanos.jpg',
        puntuacion: 4.5
    },
    {
        id: 2,
        nombre: 'Banana Split',
        precio: 35,
        descripcion: 'Banana Split con helado de vainilla y chocolate',
        imagen: 'https://imag.bonviveur.com/banana-split-principal.jpg',
        puntuacion: 4.1
    },

    {
        id: 3,
        nombre: 'Hamburguesa',
        precio: 20,
        descripcion: 'Hamburguesa con queso',
        imagen: 'https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg',
        puntuacion: 3.8
    },
    {
        id: 4,
        nombre: 'Ratatouille',
        precio: 50,
        descripcion: 'Ratatouille del chefsito',
        imagen: 'https://cdn.colombia.com/gastronomia/2011/08/11/ratatouille-3306.jpg',
        puntuacion: 4.9
    },
    {
        id: 5,
        nombre: 'Dedos de queso',
        precio: 20,
        descripcion: 'Dedos de queso con salsa de tomate',
        imagen: 'https://www.mycolombianrecipes.com/wp-content/uploads/2012/09/Deditos-o-Palitos.jpg',
        puntuacion: 4.5
    },
];



const getPlatillos = async () => {
    return listaPlatillos;
}

const findPlatilloById = (id) => {
    return listaPlatillos.find(platillo => platillo.id === id);
}

export { getPlatillos, findPlatilloById }
