// Este archivo con esta función permite hacer la conexión al servidor json-server:

async function listarProductos() {

    // Se hace una petición o requisición de tipo GET (Porque sólo hay un parámetro en fetch()):
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = conexion.json();

    console.log(conexionConvertida);

}

listarProductos(); // Se llama la función para ejecutarla.