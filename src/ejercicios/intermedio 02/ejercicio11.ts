// **Nivel Intermedio:**

import { BDTienda } from "../BDTienda"

// 11. Calcula el promedio de precios de todos los vehículos.


// crear una funcion, dentro pegar el codigo
// const suma = BDTienda.vehiculos.reduce((acumulador, objeto)=>{

// return acumulador + objeto.precio 

// }, 0);
// const promedio = suma /  BDTienda.vehiculos.length;


// console.log( `el promedio es ${promedio}` )


      

//     const numeros = [1, 2, 3, 4, 5];
// const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log(suma); // Esto imprimirá 15, que es la suma de los elementos del array.


// TypeScript
// const arrayDeStrings: string[] = ["1", "2", "3", "4", "5"];
// const arrayDeNumeros: number[] = arrayDeStrings.map((str) => parseInt(str, 10));

// console.log(arrayDeNumeros); // [1, 2, 3, 4, 5]



const valoresStrings = BDTienda.vehiculos.map((vehiculo) =>{

return (`${vehiculo.precio}`)


})

console.log(valoresStrings)

// const resultado = valoresStrings.map((valor)=>{
// return   Number(valor)

// }).reduce((acc, curr)=>{
// return acc + curr

// },0)

// console.log(resultado)