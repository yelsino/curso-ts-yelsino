    // 20. Muestra todos los clientes y la cantidad de compras que han realizado.
    import { BDTienda } from "../BDTienda";

function mostrarClientesYCompras() {
    if (BDTienda.clientes.length > 0) {
        for (const cliente of BDTienda.clientes) {
            console.log(`Cliente: ${cliente.nombre}`);
            console.log(`Cantidad de compras: ${cliente.compras.length}`);
            console.log("-----------");
        }
    } else {
        console.log('LISTA DE CLIENTES NO ENCONTRADA');
    }
}

mostrarClientesYCompras();
