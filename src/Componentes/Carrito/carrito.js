import React, { useContext } from "react";
import 'boxicons';
import { DataContext } from "../../context/provedorDatos";

export const Carrito = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    //const [total] = value.total;
   // const total=[total];
    

    const tooglefalse = () => {
        setMenu(false);
    };

    const increase = (id) => {
        const updatedCarrito = carrito.map(item =>
            item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
        setCarrito(updatedCarrito);
    };

    const reduce = (id) => {
        const updatedCarrito = carrito.map(item =>
            item.id === id && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item
        );
        setCarrito(updatedCarrito);
    };

    const removeProducto = (id) => {
        if (window.confirm("¿Quieres suspender el producto?")) {
            const updatedCarrito = carrito.filter(item => item.id !== id);
            setCarrito(updatedCarrito);
        }
    };

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito_close" onClick={tooglefalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su Carrito</h2>
                <div className="carrito_center">
                    {carrito.length === 0 ? (
                        <h2 style={{ textAlign: "center", fontSize: "3rem" }}>Carrito Vacio</h2>
                    ) : (
                        <>
                            {carrito.map((producto) => (
                                <div className="carrito_item" key={producto.id}>
                                    <img src={producto.image} alt={producto.title} />
                                    <div>
                                        <h3>{producto.title}</h3>
                                        <p className="price">${producto.price}</p>
                                    </div>
                                    <div>
                                        <box-icon
                                            onClick={() => increase(producto.id)}
                                            name="up-arrow"
                                            type="solid"
                                        />
                                        <p className="cantidad">{producto.cantidad}</p>
                                        <box-icon
                                            onClick={() => reduce(producto.id)}
                                            name="down-arrow"
                                            type="solid"
                                        />
                                    </div>
                                    <div
                                        onClick={() => removeProducto(producto.id)}
                                        className="remove_item"
                                    >
                                        <box-icon name="trash" />
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>

                <div className="carrito_footer">
                    <h3>Total: $333</h3>
                    <button className="btn">Payment</button>
                </div>
            </div>
        </div>
    );
};
