// 17. Calcula el total de ventas realizadas por un cliente específico (por ejemplo, "77068189").

import { BDTienda } from "../BDTienda";

// cliente
// ventas
// match ventas con cliente
// calcular el total de ventas

// funciones
// types
// enums
// interfaces

// NOMBRE
// DNI

interface Ventas {}

const ventaTotalXCliente = (textofind: string) => {
    if (!textofind) return;

    const cliente = BDTienda.clientes.find(
        (cliente) =>
            cliente.documento === textofind || cliente.nombre === textofind
    );

    if (!cliente) return "CLIENTE NO ENCONTRADO";

    const comprasCliente = BDTienda.ventas.filter(
        (venta) => venta.cliente === cliente.codigo
    );

    if (comprasCliente.length === 0) return "CLIENTE NO TIENE VENTAS";

    // argumento 1 = elemento anterior (prev) anterior-previo
    // argumento 2 = elemento actual (curr) actual-current
    // argumento 3 = indice
    // const montoTotalVenta = comprasCliente.reduce((prev,curr,index)=>{
    //     return 0
    // }, 0)

    // ####vuelta 1
    // prev 0
    // curr actual es un codigo string -> entonces buscar sus datos del vehiculo -> vehiculoEncontrado.precio 500 soles
    // curr -> 500
    // total = 500

    // ####vuelta 2
    // prev 500
    // curr 1000
    // total = 1000
    const montoTotalVenta = comprasCliente.reduce((prev, curr) => {

        // buscar dato del vehiculo
        const vehiculoEncontrado = BDTienda.vehiculos.find(
            (vehiculo) => vehiculo.codigo === curr.vehiculo
        );

        if (!vehiculoEncontrado) return 0;

        return prev + vehiculoEncontrado.precio;
    }, 0);


    return console.log({
        clienteNombre: cliente.nombre,
        compraTotal: montoTotalVenta
    });
    
};


ventaTotalXCliente('77068189');
