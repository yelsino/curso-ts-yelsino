// 8. Muestra todos los clientes que han realizado compras.

// traer la base datos
// obtener los clientes de base datos
// obtener las ventas
// hacer match entre clientes y ventas -> verificando si en venta.codigo de cliente le corresponde a tal cliente
// obtener clientes que realizaron compras
// mostrar clientes que han realizados compras

import { BDTienda } from "../BDTienda";

const clientes = BDTienda.clientes;
const ventas = BDTienda.ventas;

const clientesQueCompraron = clientes.filter((cliente) => {
    
    const clienteHaComprado = ventas.some((venta) => {
        // console.log(typeof venta.cliente) -> devuelve que tipo de dato es
        return venta.cliente === cliente.codigo
    });

    if (clienteHaComprado) {
        return cliente;
    }
    
});

console.log(clientesQueCompraron);
