

// // 7. Muestra todos los vehículos de la marca "Toyota".

import { BDTienda } from "../BDTienda";
import { Marcas } from "../interfaces";


const vehiculosMcToyota = BDTienda.vehiculos.filter((v) => {

return  v.marca === Marcas.TOYOTA 

})  

console.log(vehiculosMcToyota)