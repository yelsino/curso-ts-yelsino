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