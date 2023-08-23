"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BDTienda_1 = require("../BDTienda");
function encontrarVehiculoXcodigo(codigo) {
    const vehiculoEncontrado = BDTienda_1.BDTienda.vehiculos.find((vehiculo) => vehiculo.codigo === codigo);
    if (!vehiculoEncontrado) {
        return 'VEHICULO NO ENCONTRADO';
    }
    return vehiculoEncontrado.codigo;
}
encontrarVehiculoXcodigo('VL-001');
