// 9. Muestra todos los vehículos que aún no han sido vendidos.
import { BDTienda } from "../BDTienda";

const vehiculos = BDTienda.vehiculos;
const ventas = BDTienda.ventas;

const vehiculoNoVendido = vehiculos.filter((vehiculos) => {
    
    const vehiculoNoHaVendido = ventas.some((venta) => {
        return venta.vehiculo === vehiculos.codigo
    });

    if (vehiculoNoHaVendido) {
        return vehiculos;
    }
});

console.log(vehiculoNoVendido);