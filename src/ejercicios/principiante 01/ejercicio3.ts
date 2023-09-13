// 3. Obtén la lista completa de ventas.
import { BDTienda } from "../BDTienda" ;
function obtenerListaVentas(){
 
    if (BDTienda.clientes.length > 0) {
        return BDTienda.clientes;
    } else {
        return 'LISTA DE VENTAS NO ENCONTRADA';
    }
    
    
}
const listaVentas = obtenerListaVentas();
console.log(listaVentas);
