// 8. Muestra todos los clientes que han realizado compras.

import { BDTienda } from "../BDTienda";

BDTienda

const ventas= BDTienda.ventas
const clientes= BDTienda.clientes

const ClientesQueCompraron = clientes.filter((cliente) =>{
const clienteHaComprado = ventas.some((venta) => venta.codigo=== cliente.codigo
)
if(clienteHaComprado){
    return cliente
}
})
 console.log(ClientesQueCompraron)