const listaPlatillos = [
    {
        id: 1,
        nombre: 'Tacos',
        precio: 20,
        descripcion: 'Tacos de carne asada',
        imagen: 'https://cdn.shopify.com/s/files/1/0469/3193/files/fajitas_de_camarones_large.jpg?v=1583948341',
        puntuacion: 4.5
    },
    {
        id: 2,
        nombre: 'Banana Split',
        precio: 35,
        descripcion: 'Banana Split con helado de vainilla y chocolate',
        imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/07/06/18/03/chalet-restaurante.jpg',
        puntuacion: 4.1
    },

    {
        id: 3,
        nombre: 'Hamburguesa',
        precio: 20,
        descripcion: 'Hamburguesa con queso',
        imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/07/06/18/03/chalet-restaurante.jpg',
        puntuacion: 3.8
    },
    {
        id: 4,
        nombre: 'Ratatouille',
        precio: 50,
        descripcion: 'Ratatouille del chefsito',
        imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/07/06/18/03/chalet-restaurante.jpg',
        puntuacion: 4.9
    },
    {
        id: 1,
        nombre: 'Dedos de queso',
        precio: 20,
        descripcion: 'Dedos de queso con salsa de tomate',
        imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/07/06/18/03/chalet-restaurante.jpg',
        puntuacion: 4.5
    },
];



const getPlatillos = async () => {
    return listaPlatillos;
}

export { getPlatillos }
