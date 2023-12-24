import { dividerClasses } from "@mui/material";
import React from "react";
import Portada from "../imagenes/portada2.jpeg";
import {Link} from "react-router-dom";

export const Nosotros=()=>{
    return(
        <div className="nosotros"> 
           
            <img src={Portada} alt="nosotros"></img>
            <p>
            Especialistas en financiamiento de Motocicletas,Máquinas Industriales, Electrodomésticos y Muebles.
            </p>
        </div>

    );
};
export default Nosotros;