// **Nivel Intermedio:**

// 11. Calcula el promedio de precios de todos los vehículos.

import { BDTienda } from "../BDTienda";

function calcularPromedioPrecio() {

    if (!BDTienda.vehiculos.length) return 'LISTA DE VEHICULOS NO ENCONTRADA';

    const sumaPrecio = BDTienda.vehiculos.reduce((total, vehiculo) => {
        return total + vehiculo.precio;
    }, 0);

    return sumaPrecio / BDTienda.vehiculos.length;


}

console.log(`El promedio de todos los vehiculos es: ${calcularPromedioPrecio()}`);


