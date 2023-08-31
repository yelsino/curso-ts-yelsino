// 10. Muestra todas las ventas realizadas el "2003-12-07".

import { BDTienda } from "../BDTienda";

const ventasRealizadas = BDTienda.ventas.filter((v)=>{

   return   v.fechaCompra === "2003-12-07"

} )


console.log(ventasRealizadas)