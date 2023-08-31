// **Nivel Principiante:**

// preparacion de una torta 
// tener los ingredientes
// realizar la mezcla
// llevar al horno
// listo, ya esta la torta



// tener el registro de los clientes


// tener la base de datos
// obtener ls lista de clientes
// 1. Obtén la lista completa de clientes.

// import { BDTienda } from "../BDTienda"


// const listaClientes = BDTienda.clientes.map(function (cliente) {
//     return (
//       `nombres:` +
//       `   ${cliente.nombre}` +
//       ` codigo: ` +
//       ` ${cliente.codigo}` +
//       ` N de documento:` +
//       `${cliente.documento}`
//     );
//   });
  
//   console.log(listaClientes);
  
















import { BDTienda } from "../BDTienda";






// // 1. Obtén la lista completa de clientes.
// const listaDeClientes = BDTienda.clientes.map((cliente) => {

//   return (cliente.codigo, cliente.documento,cliente.nombre, cliente.codigo );
// })  ;

// console.log(listaDeClientes)



// 1. Obtén la lista completa de clientes.
const listaDeClientes = BDTienda.clientes.map((cliente) => {

   return ( `nombres:` +
        `   ${cliente.nombre}` +
      ` codigo: ` +
      ` ${cliente.codigo}` +
      ` N de documento:` +
       `${cliente.documento}`);
})  ;

console.log(listaDeClientes)














