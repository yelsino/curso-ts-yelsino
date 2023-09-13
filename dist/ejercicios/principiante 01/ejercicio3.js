"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BDTienda_1 = require("../BDTienda");
function obtenerListaVentas() {
    if (BDTienda_1.BDTienda.clientes.length > 0) {
        return BDTienda_1.BDTienda.clientes;
    }
    else {
        return 'LISTA DE VENTAS NO ENCONTRADA';
    }
}
const listaVentas = obtenerListaVentas();
console.log(listaVentas);
