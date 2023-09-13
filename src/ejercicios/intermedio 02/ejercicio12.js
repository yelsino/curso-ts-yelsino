"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 12. Encuentra el cliente que ha realizado más compras.
var BDTienda_1 = require("../BDTienda");
var vehiculos = BDTienda_1.BDTienda.vehiculos;
var clientes = BDTienda_1.BDTienda.clientes;
var ventas = BDTienda_1.BDTienda.ventas;
function clienteMasCompras() {
    var datosClientes = clientes.map(function (cliente) {
        var montoTotalCompras = ventas
            .filter(function (venta) {
            if (venta.cliente === cliente.codigo) {
                return venta;
            }
        })
            .reduce(function (ventant, ventactu, index) {
            var vehiculo = vehiculos.find(function (vehiculo) {
                if (vehiculo.codigo === ventactu.vehiculo) {
                    return vehiculo;
                }
            });
            if (!vehiculo)
                return 0;
            var suma = vehiculo.precio + ventant;
            return 0;
        }, 0);
        console.log(montoTotalCompras);
        console.log("################");
        return {
            nombre: cliente.nombre,
            codigo: cliente.codigo,
            documento: cliente.documento,
            montoTotalCompras: 0,
        };
    });
    //console.log(datosClientes)
}
clienteMasCompras();
// const clienteMasCompras = (textofind: string) => {
//   if (!textofind) return "CLIENTE NO ENCONTRADO";
//   const cliente = BDTienda.clientes.reduce((cliente: any, venta: any) => {
//     if (cliente.codigo === venta.cliente) {
//       //cliente.compras++;
//     }
//     return cliente;
//   });
//   return cliente;
// };
//const resultado = clienteMasCompras("Documento o nombre del cliente");
//console.log(resultado);
// const resultado = {
//     nombre : '',
//     codigo : '',
//     documento : '',
//     montoTotalCompras : 0
// }
