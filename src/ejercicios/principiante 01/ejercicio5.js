"use strict";
// 5. Encuentra el vehículo con el código "VL-005" y muestra su marca.
Object.defineProperty(exports, "__esModule", { value: true });
var BDTienda_1 = require("../BDTienda");
function encontrarVehiculoXcodigo(codigo) {
    // find -> elemento o undefined
    var vehiculoEncontrado = BDTienda_1.BDTienda.clientes.find(function (vehiculo) { return vehiculo.codigo === codigo; });
    if (!vehiculoEncontrado) {
        return 'VEHICULO NO ENCONTRADO';
    }
    return console.log(vehiculoEncontrado.marca);
    // const vehiculoEncontrado = BDTienda.vehiculos.find();
}
encontrarVehiculoXcodigo('VL-001');
