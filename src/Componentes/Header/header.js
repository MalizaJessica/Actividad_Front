import React, { useContext } from 'react';
import logoprincipal from '../imagenes/logoprincipal.jpg'
import 'boxicons'
import { DataContext } from '../../context/provedorDatos'
import { Link } from "react-router-dom";





export const Header = () => {
    // empezamos con const
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;


    //alternar el menu
    const toogleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header>
          {/* // <div>
        //     <h1>Header</h1>
        //     <di className="menu">
        //         <box-icon name="menu"></box-icon>
        //     </di>
        </div> */}
            {/*creacion de un logo*/}
            <Link to="/">
                <div className="logo">
                    <img src={logoprincipal} alt="Logo Principal" width="150" />
                </div>
            </Link>

            {/*iniciamos con una lista */}
            <ul>
                <li>
                    {/* ya no utilizamos a href ahora tlizamos link */}
                    {/* <a href="#">Inicio</a> */}
                    <Link to="/">INICIO </Link>
                </li>
                <li>
                    {/* <a href="#">Productos</a> */}
                    <Link to="/productos">Productos</Link>
                </li>
                <li>
                    {/* <a href="#">Productos</a> */}
                    <Link to="/nosotros">Nosotros</Link>
                </li>
            </ul>
            <div className="cart" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item-total">{carrito.length}</span>

            </div>

        </header>
    );
}
export default Header;