// 20. Muestra todos los clientes y la cantidad de compras que han realizado.

import { BDTienda } from "../BDTienda";

const clientes = BDTienda.clientes


interface ClienteDetalle {
    nombreCliente: string;
    codigoCliente: string;
    cantidadCompras: number;
}

function mostrarDatos():ClienteDetalle[]{


    return []
}