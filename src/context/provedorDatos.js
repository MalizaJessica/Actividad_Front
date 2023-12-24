import React, { useEffect, createContext, useState } from "react";
// import Data from '../data';

export const DataContext = createContext();

export const ProvedorDatos = (props) => {
    const [productos, setProductos] = useState([])
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([]);
    
    //datos locales
    // useEffect(() => { 
    //     const producto = Data.items
    //     if (producto) {// por si sudede algun error en la busqueda de un producto
    //         setProductos(producto)
    //     } else {
    //         setProductos([])
    //     }
    //     console.log("Productos cargados:", productos);
    // }, [])
    //con la api
    // useEffect(() => {
    //     //realizar la solicitud a la api
    //     fetch('https://658308e302f747c8367aeb2b.mockapi.io/tienda/producto')
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         // Actualizar el estado con los datos de la API
    //         setProductos(data);
    //     })
    //         .catch(error => {
    //             console.error('No funciona:', error)
    //         })

    // }, []);
    useEffect(() => {
        fetch('https://658308e302f747c8367aeb2b.mockapi.io/tienda/producto')// aqui esta el mockapi de productos
            .then(response => response.json())
            .then(data => {
                console.log("Datos recibidos:", data);
                setProductos(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);
    // aqui empezamos con lo del carrito
    const addCarrito = (id) => {
        const check = carrito.every(item => {
            return item.id !== id;
        })
        if (check) {
            const data = productos.filter(producto => {
                return producto.id === id
            })
            setCarrito([...carrito, ...data])
        } else {
            alert("Producto agregado")
        }
    }
    //utilizacion de local store en react se utiliza un useEfect
    // useEfect aprovecha las caegas que hay en el proyecto 
    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))//verificamos si hay algo en el carrito
        //creacion de una condicion, para que si ese dato existe se guarde a carrito
        // si ya existe para que se guarde
        if (dataCarrito) {
            setCarrito(dataCarrito)
        }
    }, [])
    useEffect(()=>{
        localStorage.setItem('dataCarrito', JSON.stringify(carrito))
    },[carrito])

    const value = {
        productos: [productos],
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito]

    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}