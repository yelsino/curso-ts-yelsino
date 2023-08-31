// 9. Muestra todos los vehículos que aún no han sido vendidos.


import { BDTienda } from "../BDTienda";

const vehiculoNovendidos = BDTienda.vehiculos.filter((v) => {


 return  v.vendido === false


})


console.log(vehiculoNovendidos)