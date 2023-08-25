"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BDTienda_1 = require("../BDTienda");
BDTienda_1.BDTienda;
const guardar = BDTienda_1.BDTienda.clientes.map(function (cliente) { return `nombres:` + `   ${cliente.nombre}` + ` codigo: ` + ` ${cliente.codigo}` + ` N de documento:` + `${cliente.documento}`; });
console.log(guardar);
