import { useContext } from "react";
import IMG from "../imagenes/aplee.jpeg";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/provedorDatos";
export const ProductoItem = ({
    id,
    title,
    price,
    image,
    category
}) => {
    console.log(image)


    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;

    return (

        <div className="productos">
            <div className="producto">
                <a href="#">
                    <div className="producto_img">
                        <img src={image} alt={title}></img>
                    </div>
                </a>
                <div className="producto_footer">
                    <h1>{title}</h1>
                    <p>{category}</p>
                    <p className="price">${price}</p>
                </div>
                <div className="buttom">
                    <button className="btn" onClick={() => addCarrito(id)}>
                        Añadir al carrito
                    </button>
                    <div>
                        <a href="#" className="btn">Vista</a>
                    </div>
                </div>
            </div>

        </div>


    )
}