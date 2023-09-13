"use strict";
// 13. Encuentra el vehículo más caro.
Object.defineProperty(exports, "__esModule", { value: true });
var BDTienda_1 = require("../BDTienda");
function carroCaro() {
    return BDTienda_1.BDTienda.vehiculos.reduce(function (carroActual, carroSiguiente) {
        return carroActual.precio > carroSiguiente.precio
            ? carroActual
            : carroSiguiente;
    });
}
var carroMascaro = carroCaro();
console.log("El carro más caro es:");
console.log(carroMascaro);
