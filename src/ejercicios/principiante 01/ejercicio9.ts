// 9. Muestra todos los vehículos que aún no han sido vendidos.
import { BDTienda } from "../BDTienda";

const vehiculos = BDTienda.clientes;
const ventas = BDTienda.ventas;

const vehiculoNoVendido = vehiculos.filter((vehiculo) => {
    
    const vehiculoNoHaVendido = ventas.some((venta) => {
        return venta.vehiculo === vehiculo.codigo
    });

    if (vehiculoNoHaVendido) {
        return vehiculo;
    }
});

console.log(vehiculoNoVendido);