import { BDTienda } from "../BDTienda";

// 16. Muestra el cliente que realizó la compra más reciente.


const fechasDeCompras = BDTienda.ventas.filter((valor) =>{

     return valor.fechaCompra 
    
})

console.log(fechasDeCompras)