const productos = [
    {
        id: "t01",
        img: "/src/assets/img/1.png",
        imgextra: "/src/assets/img/img.png",
        titulo: "Taza cerámica mágica",
        precio: 6500,
        descripcion: "Una taza que cambia de color con el calor, revelando un diseño sorpresa. Perfecta para disfrutar de tus bebidas favoritas de una manera divertida.",
        categoria: "tazas",
        stock: 10
    },
    {
        id: "t02",
        img: "/src/assets/img/2.png",
        imgextra: "/src/assets/img/img.png",
        titulo: "Taza cerámica con fotos",
        precio: 5500,
        descripcion: "Taza personalizada con fotos a tu elección, ideal para regalos o para tener un recuerdo especial en cada sorbo.",
        categoria: "tazas",
        stock: 10
    },
    {
        id: "t03",
        img: "/src/assets/img/3.png",
        imgextra: "/src/assets/img/img.png",
        titulo: "Taza cerámica duo parejas",
        precio: 10450,
        descripcion: "Set de tazas para parejas con diseños combinados, perfecto para compartir momentos especiales con esa persona especial.",
        categoria: "tazas",
        stock: 10
    },
    {
        id: "t04",
        img: "/src/assets/img/4.png",
        imgextra: "/src/assets/img/img.png",
        titulo: "Tazas cerámica nombres",
        precio: 5500,
        descripcion: "Tazas personalizadas con nombres o frases, una excelente opción para regalar o disfrutar en el hogar.",
        categoria: "tazas",
        stock: 10
    },
    {
        id: "r01",
        img: "/src/assets/img/5.png",
        imgextra: "/src/assets/img/img.png",
        titulo: "Remera modal adulto",
        precio: 8500,
        descripcion: "Remera de modal para adultos, suave y cómoda, perfecta para el día a día con un estilo moderno y elegante.",
        categoria: "remeras",
        stock: 10
    },
    {
        id: "r02",
        img: "/src/assets/img/6.png",
        imgextra: "/src/assets/img/img.png",
        titulo: "Remera algodón adulto",
        precio: 10500,
        descripcion: "Remera de algodón para adultos, ideal para cualquier ocasión. Combina confort y estilo con un toque casual.",
        categoria: "remeras",
        stock: 10
    },
    {
        id: "r03",
        img: "/src/assets/img/7.png",
        imgextra: "/src/assets/img/img.png",
        titulo: "Remera modal niños",
        precio: 7500,
        descripcion: "Remera de modal para niños, cómoda y duradera. Perfecta para el uso diario, brindando libertad de movimiento.",
        categoria: "remeras",
        stock: 10
    },
    {
        id: "r04",
        img: "/src/assets/img/8.png",
        imgextra: "/src/assets/img/img.png",
        titulo: "Remera modal niños",
        precio: 7500,
        descripcion: "Remera de modal para niños, cómoda y duradera, ideal para las actividades diarias. Disponible en varios colores.",
        categoria: "remeras",
        stock: 10
    },
    {
        id: "f01",
        img: "/src/assets/img/9.png",
        imgextra: "/src/assets/img/img.png",
        titulo: "Fotos polaroid 12u",
        precio: 3100,
        descripcion: "Set de 12 fotos estilo polaroid para recuerdos especiales, perfectas para decorar y capturar momentos inolvidables.",
        categoria: "fotos",
        stock: 10
    },
    {
        id: "f02",
        img: "/src/assets/img/10.png",
        imgextra: "/src/assets/img/img.png",
        titulo: "Fotos polaroid 18u",
        precio: 3300,
        descripcion: "Set de 18 fotos estilo polaroid para recuerdos especiales. Ideal para crear álbumes o decorar espacios con tus memorias.",
        categoria: "fotos",
        stock: 10
    },
    {
        id: "f03",
        img: "/src/assets/img/11.png",
        imgextra: "/src/assets/img/img.png",
        titulo: "Fotos polaroid souvenirs 12u",
        precio: 4900,
        descripcion: "Set de 12 fotos polaroid para souvenirs, una manera única de compartir y recordar eventos especiales con amigos y familia.",
        categoria: "fotos",
        stock: 10
    },
    {
        id: "f04",
        img: "/src/assets/img/12.png",
        imgextra: "/src/assets/img/img.png",
        titulo: "Fotos polaroid souvenirs 18u",
        precio: 5200,
        descripcion: "Set de 18 fotos polaroid para souvenirs, perfectas para cualquier ocasión especial o para decorar tus espacios favoritos.",
        categoria: "fotos",
        stock: 10
    }
]

const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
            resolve(productos)
    });
};

export default obtenerProductos