import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/provedorDatos';
import { ProductoItem } from "./productoItem";

export const ProductosLista = () => {

    const value = useContext(DataContext)
    const [productos] = value.productos
    //  const [productos, setProductos] = useState([]);

    console.log(productos)


    return (
        <>
            <h1 className="title">Productos</h1>
            <div className="productos">

                {Array.isArray(productos) && productos.length > 0 ? (
                    productos.map(producto => (
                        <ProductoItem
                            key={producto.id}
                            id={producto.id}
                            title={producto.title}
                            price={producto.price}
                            image={producto.image}
                            category={producto.category}
                        />
                    ))
                ) : (
                    <p>No hay datos</p>

                )}

            </div>

        </>

    );
};
// export default ProductosLista;