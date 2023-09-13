// 4. Encuentra el cliente con el código "CL-002" y muestra su nombre.
import { BDTienda } from "../BDTienda"
function encontrarClienteXcodigo(codigo:string){
    const clienteEncontrado = BDTienda.clientes.find((cliente)=>cliente.codigo === codigo);
    if(!clienteEncontrado){
        return 'CLIENTE NO ENCONTRADO'
    }
    return console.log(clienteEncontrado.nombre);
    
}
encontrarClienteXcodigo('CL-002')
