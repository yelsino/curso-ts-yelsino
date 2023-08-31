"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BDTienda_1 = require("../BDTienda");
BDTienda_1.BDTienda;
const listadeVentas = BDTienda_1.BDTienda.ventas.map(function (venta) {
    return (`cliente:` +
        `   ${venta.cliente}` +
        ` codigo: ` +
        ` ${venta.codigo}` +
        ` fechadecompra:` +
        `${venta.fechaCompra}`
        +
            ` vehiculo:` +
        `${venta.vehiculo}`);
});
console.log(listadeVentas);
