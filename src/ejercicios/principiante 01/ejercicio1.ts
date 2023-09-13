// **Nivel Principiante:**

// 1. Obtén la lista completa de clientes.
import { BDTienda } from "../BDTienda" ;



function obtenerListaClientes(){

 

    if (BDTienda.clientes.length > 0) {
        return BDTienda.clientes ;
    } else {
        return 'LISTA DE CLIENTES NO ENCONTRADA';
    }
    


}

const listaClientes = obtenerListaClientes();
console.log(listaClientes);