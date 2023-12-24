import { dividerClasses } from "@mui/material";
import React from "react";
import Portada from "../imagenes/logosecundario.jpg";
import {Link} from "react-router-dom";

export const Inicio=()=>{
    return(
        <div className="inicio"> 
            <Link to="/">
                <h1 className="title">Inicio</h1>
                <p>La tienda en linea se trata de mejorar el acceso a los clientes</p>
            </Link>
            <Link to="/productos">
            <h1 className="title">Productos</h1>
            </Link>
            <Link to="/nosotros">
            <h1 className="title">Nosotros</h1>
            </Link>
            <img src={Portada} alt="inicio"></img>
        </div>

    );
};