// 12. Encuentra el cliente que ha realizado más compras.

import { BDTienda } from "../BDTienda";

// clientes - ventas - vehiculos

const clientes = BDTienda.clientes;
const ventas = BDTienda.ventas;
const vehiculos = BDTienda.vehiculos;

interface DatoCompra {
    codigoCliente: string;
    nombreCliente: string;
    compraTotal: number;
}

function clienteMasGasto() {
    const datoCompras: DatoCompra[] = clientes.map((cliente) => {
        // compras cliente actual
        const comprasCliente = ventas.filter((venta) => {
            if (cliente.codigo === venta.cliente) {
                return venta;
            }
        });

        // vehiculos asociados a la compra
        const compraTotal = comprasCliente.reduce((total, venta) => {
            const vehiculoEncontrado = vehiculos.find(
                (vehiculo) => vehiculo.codigo == venta.vehiculo
            );

            if (!vehiculoEncontrado) return 0;

            return total + vehiculoEncontrado.precio;
        }, 0);

        return {
            codigoCliente: cliente.codigo,
            nombreCliente: cliente.nombre,
            compraTotal: compraTotal,
        };
    });

    const mejorCliente = datoCompras.reduce((acc, curr) => {
        return acc.compraTotal < curr.compraTotal ? curr : acc;
    });

    return mejorCliente;
}

clienteMasGasto();
