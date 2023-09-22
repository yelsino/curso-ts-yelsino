// 14. Calcula el total de ventas realizadas.

import { BDTienda } from "../BDTienda";
const totalVentasRealizadas = BDTienda.vehiculos.filter((valor) => {
    valor.vendido = true;
    return valor.precio;
});
console.log(totalVentasRealizadas);
