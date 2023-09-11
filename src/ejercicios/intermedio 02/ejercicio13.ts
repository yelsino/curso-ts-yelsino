// 13. Encuentra el vehículo más caro.

import { match } from "assert";
import { BDTienda } from "../BDTienda";


const numeros  = BDTienda.vehiculos.map((vehiculo)=> {

 return  vehiculo.precio


})

// console.log(numeros)

const vehiculoMasCaro  = Math.max(...numeros)
console.log(vehiculoMasCaro)