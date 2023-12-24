
import React from "react";
//import Product from './components/Products';
import { Header } from "./Componentes/Header/header";
//import 'boxicons';//los componentes hijos puede utilizar los iconos
// import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import { Paginas } from "./Componentes/paginas.js";
import {ProvedorDatos} from "./context/provedorDatos.js";
//import { ProductosLista } from "./Componentes/Productos/productos.js";
import { Carrito } from "./Componentes/Carrito/carrito.js";

//App es nuestro componenete padre
function App() {
  return (
    <ProvedorDatos>
    <div className="App">
      <Router>

        <Header />
        <Carrito/>
        <Paginas />
     

      </Router>
     
    </div>
    </ProvedorDatos>
  );
}
export default App;
