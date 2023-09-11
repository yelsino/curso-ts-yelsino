// 19. Encuentra el vehículo más barato.
import { BDTienda } from "../BDTienda";


const numeros  = BDTienda.vehiculos.map((vehiculo)=> {

 return  vehiculo.precio


})

console.log(numeros)

// const vehiculoMasBarato  = Math.min(...numeros)
// console.log(vehiculoMasBarato)