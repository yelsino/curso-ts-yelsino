// 6. Encuentra la venta con el código "COMP-0003" y muestra la fecha de compra.

import { BDTienda } from "../BDTienda"



function encontrarVentaXcodigo(codigo:string){

   

    const ventaEncontrada = BDTienda.ventas.find((venta)=>venta.codigo === codigo);

    if(!ventaEncontrada){
        return 'no se encontro la venta'
    }

    
    return console.log(ventaEncontrada.fechaCompra);
    



}

encontrarVentaXcodigo('COMP-0001')
