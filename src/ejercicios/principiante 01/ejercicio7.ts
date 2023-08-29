// 7. Muestra todos los vehículos de la marca "Toyota".
import { BDTienda } from "../BDTienda";

const vehiculos = BDTienda.vehiculos;

const vehiculosToyota = vehiculos.filter((vehiculo) => {
    return vehiculo.marca === "Toyota";
});

console.log(vehiculosToyota);
