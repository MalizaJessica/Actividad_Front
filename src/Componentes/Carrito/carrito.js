import React, { useContext } from "react";
import Cart from "../imagenes/aplee.jpeg";
import {Link} from "react-router-dom"
import { DataContext } from "../../context/provedorDatos";

//empesamos utilizadon UseContext
export const Header= ()=>{
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [total] = value.total;

    console.log(menu)

    const toogleMenu = () =>{
        setMenu(!menu)
    }
    

}






//progra normal
export const Carrito = () => {
    return (
        <div className="carritos show">
            <div className="carrito show">
                <br /><br /><br /><br /><br /><br />
                <div className="carrito_close">
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su carrito</h2>
                <div className="carrito_center">
                    <div className="carrito_item">
                        <img src={Cart} alt=""></img>
                        <div>
                            <h3>title</h3>
                            <p className="price">$345</p>
                        </div>

                        <div>
                            <box-icon name="up-arrow" type="solid"></box-icon>
                            <p className="cantidad">1</p>
                            <box-icon name="down-arrow" type="solid"></box-icon>
                        </div>
                        <div className="remove_item">
                            <box-icon name="trash"></box-icon>

                        </div>
                    </div>
                </div>

                <div className="carrito_footer">
                    <h3>Total:$233</h3>
                    <button className="btn">Pago</button>

                </div>
            </div>
        </div>
    )
}