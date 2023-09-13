// 12. Encuentra el cliente que ha realizado más compras.
import { BDTienda } from "../BDTienda";

interface DatoCliente {
  nombre: string;
  codigo: string;
  documento: string;
  montoTotalCompras: number;
}

const vehiculos = BDTienda.vehiculos;
const clientes = BDTienda.clientes;
const ventas = BDTienda.ventas;

function clienteMasCompras() {
  const datosClientes: DatoCliente[] = clientes.map((cliente) => {
    const montoTotalCompras = ventas
      .filter((venta) => {
        if (venta.cliente === cliente.codigo) {
          return venta;
        }
      })
      .reduce((ventant, ventactu, index) => {


        const vehiculo = vehiculos.find((vehiculo) => vehiculo.codigo === ventactu.vehiculo);

        if (!vehiculo) return 0;

        const suma = vehiculo.precio + ventant;

        return 0;
      }, 0);

    console.log(montoTotalCompras);
    console.log("################");

    return {
      nombre: cliente.nombre,
      codigo: cliente.codigo,
      documento: cliente.documento,
      montoTotalCompras: 0,
    };
  });

  //console.log(datosClientes)
}

clienteMasCompras();

// const clienteMasCompras = (textofind: string) => {
//   if (!textofind) return "CLIENTE NO ENCONTRADO";

//   const cliente = BDTienda.clientes.reduce((cliente: any, venta: any) => {
//     if (cliente.codigo === venta.cliente) {
//       //cliente.compras++;
//     }
//     return cliente;
//   });

//   return cliente;
// };

//const resultado = clienteMasCompras("Documento o nombre del cliente");
//console.log(resultado);

// const resultado = {
//     nombre : '',
//     codigo : '',
//     documento : '',
//     montoTotalCompras : 0
// }
