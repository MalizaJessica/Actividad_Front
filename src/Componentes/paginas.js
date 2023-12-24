import React from 'react'
import { Route, Routes } from "react-router-dom";
import {ProductosLista} from "./Productos/productos";
import { Inicio } from "./Inicio/inicio";

export const Paginas = () => {
    return (
        //section elemento de seccion
        <section>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/productos" element={<ProductosLista />} />
                {/* <Route path="/" element={<Nosotros />} /> */}

            </Routes>
        </section>
    );
};