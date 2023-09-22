// 16. Muestra el cliente que realizó la compra más reciente.
import { BDTienda } from "../BDTienda";

// COMO RESOLVER?
/**
 * obtener todos los clientes
 * obtener todos las compras
 * obtener la compra mas actual
 * ya que no puedo comparar entre strings. 
 * debo convertir a cada fecha de la compra en numero(milisegundos)
 * ya que está convertida hacer la comparación entre milisegundas.
 */

interface CompraCliente {
    codigoCompra: string;
    codigoVehiculo: string;
    codigoCliente: string;
    nombreCliente: string;
    fechaCompra: string;
    montoCompra: number;
    nombreVehiculo: string;
}

const ventas = BDTienda.ventas;
const vehiculos = BDTienda.vehiculos;
const clientes = BDTienda.clientes;

const recentPurchase = (): CompraCliente => {
    const orderVentas = ventas.sort(
        (a, b) =>
            new Date(b.fechaCompra).getTime() -
            new Date(a.fechaCompra).getTime()
    );

    const ventaReciente = orderVentas[0];

    const vehiculo = vehiculos.find(
        (vehiculo) => ventaReciente.vehiculo === vehiculo.codigo
    );
    const cliente = clientes.find(
        (cliente) => ventaReciente.cliente === cliente.codigo
    );

    const compraCliente = {
        codigoCompra: ventaReciente.codigo,
        codigoVehiculo: ventaReciente.codigo,
        codigoCliente: ventaReciente.cliente,
        nombreCliente: cliente?.nombre ?? "",
        fechaCompra: ventaReciente.fechaCompra,
        montoCompra: vehiculo?.precio ?? 0,
        nombreVehiculo: vehiculo?.nombre ?? "",
    };
    console.log(compraCliente);

    return compraCliente;
};

recentPurchase();
