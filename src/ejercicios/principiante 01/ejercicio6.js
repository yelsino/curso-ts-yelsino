"use strict";
// 6. Encuentra la venta con el código "COMP-0003" y muestra la fecha de compra.
Object.defineProperty(exports, "__esModule", { value: true });
var BDTienda_1 = require("../BDTienda");
function encontrarVentaXcodigo(codigo) {
    // find -> elemento o undefined
    var ventaEncontrada = BDTienda_1.BDTienda.ventas.find(function (venta) { return venta.codigo === codigo; });
    if (!ventaEncontrada) {
        return 'VENTA NO ENCONTRADO';
    }
    return console.log(ventaEncontrada.fechaCompra);
    // const vehiculoEncontrado = BDTienda.vehiculos.find();
}
encontrarVentaXcodigo('COMP-0003');
