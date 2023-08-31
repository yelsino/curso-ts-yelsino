// 2. Obtén la lista completa de vehículos.
import { BDTienda } from "../BDTienda";

const listaVehiculos = BDTienda.vehiculos.map(function (vehiculo) {
    return (
      `codigo:` +
      `   ${vehiculo.codigo}` +
      ` marca: ` +
      ` ${vehiculo.marca}` +
      ` nombre:` +
      `${vehiculo.nombre}`
      +
      ` precio:` +
      `${vehiculo.precio}`
      
      
    );
  });
  
  console.log(listaVehiculos);
  