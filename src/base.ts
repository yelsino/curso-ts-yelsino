// COSAS SIN NOMBRAR
//  {}, [], ()=>, f(){}

// map
// reduce
// filter

// findIndex
// some
// forEach
// find

// function comprarVehiculo(arg1,arg2){

// }

/**
 * number
 * string
 * boolean
 * arrays
 * object
 * function
 *
 * null
 * void
 * undefined
 * never
 * unknown
 *
 *
 * any
 * tuples
 * enum
 *--
 * Enums
 * interface
 * type
 *
 */

/**
 * funciones 
 * argumentos
 * callback
 * invocacion
 * operadores aritmeticos
 * 
 * algunos metodos de arreglo
 * algunos metodos de string
 * 
 * return

 */

const carros1232 = new Carros();

type Marca = "Fiat" | "Volks" | "Ford";

interface Carro {
    nome: string;
    ano: number;
    preco?: number;
    marca: Marca;
}

const carro1: Carro = {
    nome: "Fiat",
    ano: 2020,
    preco: 100000,
    marca: "Fiat",
};

const carro2: Carro = {
    nome: "Fiat",
    ano: 2020,
    marca: "Fiat",
    preco: 100_000,
};

// metodos
let vehiculos: Carro[] = [carro1, carro2];

// const vehiculosDescuento: Carro[] = vehiculos.map((vehiculo) => {
//     return {
//         ...vehiculo,
//         preco: vehiculo.preco ?? 0 * 0.9,
//     };
// });

function comprarVehiculo(
    vehiculo: Carro,
    callback2: (carro: Carro) => void,
    callback3: (numeroCarro: number) => Carro
) {
    const vehiculoEncontrado = vehiculos.find((v) => v.nome === vehiculo.nome);

    if (vehiculoEncontrado) {
        callback2(vehiculoEncontrado);
    }

    const carroObtenido = callback3(5);

    console.log(carroObtenido);
}

// operadores aritmeticos
if ([1, 2, 3].some((el) => el === 1)) {
    32132321;
    312321;
}

function eliminarVehiculo(vehiculoParaEliminar: Carro) {
    if (vehiculoParaEliminar) {
        const filterVehiculos = vehiculos.filter(
            (v) => v.nome !== vehiculoParaEliminar.nome
        );

        vehiculos = filterVehiculos;
    }
}

function obtenerCarrro(idCarro: number) {
    //
    //
    return carro1;
}

comprarVehiculo(
    carro1,
    () => eliminarVehiculo(carro1),
    () => obtenerCarrro(5)
);

let variabl1: any = "312312";
variabl1 = 5;

// 8/21/2023

/**
 * 
* spread operator ...
 * destruccturacion
	map	
	filter	
	reducer
	
ejercios. 
	-buscar un elemento en especifico
	-eliminar un elemento en especifico
	-aplicar un descuento
	-abstrae un carro con 10 propiedades
		1 atributo debe ser arreglo
		1 atributo debe ser un objeto
		
	-abstraer base de datos
	-convertir nombres a carros


 */

// destructuracion de objetos
// es la forma de obtener valoes de un objeto o arreglo
const { ano, marca, preco } = carro1;
const [indice1, indice2] = vehiculos;

// como usar map ->
// sirve para convertir elementos de un arreglo
const vehiculosDescuento: Carro[] = vehiculos.map((vehiculo) => {
    return {
        ...vehiculo,
        preco: (vehiculo.preco ?? 0) * 0.7 
    };
});

// [{},{}] arroglo de carros pero su precio reducido un 30% 

// como usar filter 
const filtrarCarros : Carro[] = vehiculos.filter((vehiculo) => {
    if(vehiculo.marca === 'Fiat'){
        return vehiculo
    }
    
});


// como usar reduce 
// obtener el total de monto de los tarros

// 1000
// 1500
const montoTotal: number = vehiculos.reduce((acc,vehiculo)=>{

    const suma = vehiculo.preco ?? 0 + acc

    return suma

},0);



// convertir tipo de datos a otro tipo datos 
/**
*number
* string
* boolean
* arrays
* object
* function
 */

const numero50 = "50";

'323232'


Number(numero50); // 50
String(numero50); // "50"
Date() // recibe todos los metodos para trabajar fechas 
Array(numero50) // ['50'] 


