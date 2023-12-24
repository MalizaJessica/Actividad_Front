import React from 'react';
//import IMG from "../imagenes/logosecundario.jpg";
const data = {
    status: "success",
    items: [
      {
        id: 1,
        title: "Laptop Apple",
        price: 599,
        image: require('./Componentes/imagenes/aplee.jpeg'),
        category: "lavadoras",
        
      },
      {
        id: 2,
        title: "Apple",
        price: 799,
        image: require('./Componentes/imagenes/apleecell.jpeg'),
        category: "refrigeradores",
        cantidad: 1,
      },
      {
        id: 3,
        title: "Televisor Sony 4K",
        price: 999,
        image: require('./Componentes/imagenes/honorcell.jpeg'),
        category: "televisores",
        img1: "URL_IMAGEN_1",
        img2: "URL_IMAGEN_2",
        cantidad: 1,
      },
      // Puedes agregar más productos según sea necesario
    ],
  };
  
  export default data;
  