// 10. Muestra todas las ventas realizadas el "2003-12-07".
import { BDTienda } from "../BDTienda";

const ventas = BDTienda.ventas;

const fechaBuscada = "2003-12-07";

const ventasEncontradas = ventas.filter((venta) => {
    return venta.fechaCompra === fechaBuscada;
});

console.log(ventasEncontradas);
