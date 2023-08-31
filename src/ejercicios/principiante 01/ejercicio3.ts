// 3. Obtén la lista completa de ventas.

import { BDTienda } from "../BDTienda";

BDTienda;



const listadeVentas = BDTienda.ventas.map(function (venta) {
  return (
    `cliente:` +
    `   ${venta.cliente}` +
    ` codigo: ` +
    ` ${venta.codigo}` +
    ` fechadecompra:` +
    `${venta.fechaCompra}`
    +
      ` vehiculo:` +
      `${venta.vehiculo}`
  );
});

console.log(listadeVentas);
