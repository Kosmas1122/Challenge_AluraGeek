import {conexionAPI} from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");


function crearCard(nombre, precio, imagen) {
    const producto = document.createElement("li");
    producto.className = "productos__item";
    producto.innerHTML = 
    `<div class="card">
        <img class="card__img" src="${imagen}" alt="Imagen producto" />
        <div class="card__info">
            <p> ${nombre} </p>
            <div class="card__valor">
                <p> ${precio} </p>
                <button class="card__boton"> <div class="card__trash"></div> </button>
            </div>
        </div>
    </div>`;
    
    return producto;
} 


async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(producto => lista.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen)));
}

listarProductos();