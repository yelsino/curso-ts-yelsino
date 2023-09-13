"use strict";
// **Nivel Intermedio:**
Object.defineProperty(exports, "__esModule", { value: true });
// 11. Calcula el promedio de precios de todos los vehículos.
var BDTienda_1 = require("../BDTienda");
function calcularPromedioPrecio() {
    if (BDTienda_1.BDTienda.vehiculos.length > 0) {
        var sumaPrecio = BDTienda_1.BDTienda.vehiculos.reduce(function (total, vehiculo) {
            return total + vehiculo.precio;
        }, 0);
        return sumaPrecio / BDTienda_1.BDTienda.vehiculos.length;
    }
    else {
        return 'LISTA DE VEHICULOS NO ENCONTRADA';
    }
}
console.log("El promedio de todos los vehiculos es: ".concat(calcularPromedioPrecio()));
