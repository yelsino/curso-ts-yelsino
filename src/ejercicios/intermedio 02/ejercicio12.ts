// 12. Encuentra el cliente que ha realizado más compras.
import { cachedDataVersionTag } from "v8";
import { BDTienda } from "../BDTienda";
import {
  couldStartTrivia,
  displayPartsToString,
  getAllJSDocTagsOfKind,
  isJSDocReturnTag,
} from "typescript";
import { log } from "console";

///x///////x///////x///////x///////x///////x////

// filtrar compra de vehiculo de cada cliente    codigocliente  codigovehiculo venta
// obtner los precios
// sumar compras de cada cliente
// realizar una comparcion  que cada cliente gasto
// en vehiculo  precio
// 10 autos
// 3 clientes
// 10 ventas
// filtrar

///x///////x///////x///////x///////x///////x///////x///////x///////x///////x///////x///////x////

const codDeVehiculosDeCliente = BDTienda.ventas.filter(
  (v) => v.cliente === "CL-001"
);

// const filtrandoventas = BDTienda.vehiculos.filter((vehiculo)=>
// // codComprasDeCliente.join("") === vehiculo.codigo

// )
// con
// console.log(codComprasDeCliente);
// console.log(filtrandoventas);

// const codigosVehiculos = comprasDeCliente.filter((p)=>
// p.vehiculo. === "VL"
// )
// console.log(codigosVehiculos);

///x///////x///////x///////x///////x///////x///////x///////x///////x///////x///////x///////x////
// function ClienteConMasCompraVehiculo(codigoveh: string) {
// const listaDeClientes = BDTienda.clientes.map((cliente) =>
// console.log(cliente.codigo)
//      )

// const encontrarCodVehic = BDTienda.ventas.filter((venta) => {
// const vehiculosvendidos = BDTienda.vehiculos.find(
//   (vehiculo) => vehiculo.vendido === true && vehiculo.codigo === codigoveh
// );
// console.log(vehiculosvendidos);
// const codigoveh= "VL-002"
//   const filtraDatosVenta = BDTienda.ventas.find((venta) =>
//    venta.vehiculo === codigoveh

//    );
//   console.log(filtraDatosVenta);
// console.log(codigoveh);

// }
//     )

// }

// ClienteConMasCompraVehiculo("VL-002")

///x///////x///////x///////x///////x///////x///////x///////x///////x///////x///////x///////x////
//Ejercicio usando operador ternario:  cuando use console log, imprime de lo contrario no
// function validacioDeCliente(codigo:string) {

//     codigo.length > 7 ? console.log("es masyor que 7")
//      : "es menor que 7" }
// validacioDeCliente("hyu")
// const  codigoveh = "VL-002 "
// const cadsda = BDTienda.clientes.filter((c) => {
//    c.codigo === "CL-001"
//  }

//  );
//  console.log(cadsda);
// console.log(codigoveh);

// function llamar(codigo:string) {
//     const clientes = BDTienda.clientes.find((x)=>{ x.codigo
//       if (x.codigo == codigo) {   const filtroDeNombre = x.codigo;
//         return   console.log(filtroDeNombre);
//                }  else  console.log("NO hay nada");

//    })

// }
// llamar("BHJVH")

// function llamar(codigo:string) {
//     const clientes = BDTienda.clientes.find((cliente)=>
//     cliente.codigo === codigo
//    );
//  if  (cliente.codigo === codigo)  else return "vfcgfcgf"

// if (!clientes) return console.log("nada");
// console.log(clientes);

// const encontrarCodVehic= BDTienda.ventas.filter((venta)=>{
// cliente.codigo === venta.codigo ?  venta : "no se puede continuar con el proceso"
// const filtarcodigoVenta= BDTienda.ventas.find((venta)=>
// clientes.codigo === venta.cliente)
// // console.log(filtarcodigoVenta);

// const filtrarVentasCliente =BDTienda.vehiculos.filter((vehiculo)=>
// filtarcodigoVenta?.vehiculo === vehiculo.codigo

// );
// console.log(filtrarVentasCliente);

// // })

// }
// llamar("CL-002")
