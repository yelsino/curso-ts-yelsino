"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 10. Muestra todas las ventas realizadas el "2003-12-07".
var BDTienda_1 = require("../BDTienda");
var ventas = BDTienda_1.BDTienda.ventas;
var fechaBuscada = "2003-12-07";
var ventasEncontradas = ventas.filter(function (venta) {
    return venta.fechaCompra === fechaBuscada;
});
console.log(typeof ventasEncontradas);
