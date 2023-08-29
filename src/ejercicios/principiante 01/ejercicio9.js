"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 9. Muestra todos los vehículos que aún no han sido vendidos.
var BDTienda_1 = require("../BDTienda");
var vehiculos = BDTienda_1.BDTienda.vehiculos;
var ventas = BDTienda_1.BDTienda.ventas;
var vehiculoNoVendido = vehiculos.filter(function (vehiculos) {
    var vehiculoNoHaVendido = ventas.some(function (venta) {
        return venta.vehiculo === vehiculos.codigo;
    });
    if (vehiculoNoHaVendido) {
        return vehiculos;
    }
});
console.log(vehiculoNoVendido);
