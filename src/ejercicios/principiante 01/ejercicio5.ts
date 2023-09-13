// 5. Encuentra el vehículo con el código "VL-005" y muestra su marca.

import { BDTienda } from "../BDTienda"

function encontrarVehiculoXcodigo(codigo: string) {

    const vehiculoEncontrado = BDTienda.vehiculos.find((vehiculo) => vehiculo.codigo === codigo);

    if (!vehiculoEncontrado) {
        return 'VEHICULO NO ENCONTRADO'
    }

    return console.log(vehiculoEncontrado.marca);

}

encontrarVehiculoXcodigo('VL-001')

