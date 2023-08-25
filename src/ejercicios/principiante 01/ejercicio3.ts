// 3. Obtén la lista completa de ventas.

import { BDTienda } from "../BDTienda";

BDTienda;

// const scd : Carro[] = vehiculos.filter((vehiculo) => {
//     if(vehiculo.marca === 'Fiat'){
//         return vehiculo
//     }

// });

const guardar = BDTienda.clientes.map(function (cliente) {
  return (
    `nombres:` +
    `   ${cliente.nombre}` +
    ` codigo: ` +
    ` ${cliente.codigo}` +
    ` N de documento:` +
    `${cliente.documento}`
  );
});

console.log(guardar);
