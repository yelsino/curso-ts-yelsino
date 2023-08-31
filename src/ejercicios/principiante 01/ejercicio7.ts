

// // 7. Muestra todos los vehículos de la marca "Toyota".

import { BDTienda, Marcas } from "../BDTienda";


const vehiculosMcToyota = BDTienda.vehiculos.filter((v) => {

return  v.marca === Marcas.TOYOTA 

})  