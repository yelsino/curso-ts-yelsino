// // 8. Muestra todos los clientes que han realizado compras.

import { BDTienda } from "../BDTienda";

BDTienda

const ventas= BDTienda.ventas
const clientes= BDTienda.clientes

const ClientesQueCompraron = clientes.filter((cliente) =>{
const clienteHaComprado = ventas.some((venta) => venta.codigo=== cliente.codigo
)
if(clienteHaComprado){
    return cliente
}
})
 console.log(ClientesQueCompraron)

// // traer la base datos
// // obtener los clientes de base datos
// // obtener las ventas
// // hacer match entre clientes y ventas -> verificando si en venta.codigo de cliente le corresponde a tal cliente
// // obtener clientes que realizaron compras
// // mostrar clientes que han realizados compras

// import { BDTienda } from "../BDTienda";

// const clientes = BDTienda.clientes;
// const ventas = BDTienda.ventas;

// const clientesQueCompraron = clientes.filter((cliente) => {
    
//     const clienteHaComprado = ventas.some((venta) => {
//         // console.log(typeof venta.cliente) -> devuelve que tipo de dato es
//         return venta.cliente === cliente.codigo
//     });

//     if (clienteHaComprado) {
//         return cliente;
//     }
    
// });

// console.log(clientesQueCompraron);
// >>>>>>> a2ca3d19de3bfa93b0beab56a3fb3604c26f115a
