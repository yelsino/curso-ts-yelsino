// 2. Obtén la lista completa de vehículos.
import { BDTienda } from "../BDTienda" ;
function obtenerListaVehiculos(){
 
    if (BDTienda.clientes.length > 0) {
        return BDTienda.clientes;
    } else {
        return 'LISTA DE VEHICULOS NO ENCONTRADA';
    }
    
}
const listaVehiculos = obtenerListaVehiculos();
console.log(listaVehiculos);