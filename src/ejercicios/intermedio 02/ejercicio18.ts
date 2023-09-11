// 18. Muestra todos los vehículos de la marca "Honda" que no han sido vendidos.
import { Marcas } from "../BDTienda";
import { BDTienda } from "../BDTienda";
const vehiculosHonda = BDTienda.vehiculos.filter((vehiculo) => {
  return vehiculo.marca == Marcas.HONDA;
});

// console.log(vehiculosHonda)

const vehiculosHondaVendidos = vehiculosHonda
  .filter((auto) => {
    if (!auto.vendido) {
      return auto;
    }
  })
  .filter((valor) => {
    if (valor.marca == Marcas.HONDA) {
      return valor;
    }
  });
console.log(vehiculosHondaVendidos);
