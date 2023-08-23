"use strict";
const carros1232 = new Carros();
const carro1 = {
    nome: "Fiat",
    ano: 2020,
    preco: 100000,
    marca: "Fiat",
};
const carro2 = {
    nome: "Fiat",
    ano: 2020,
    marca: "Fiat",
    preco: 100000,
};
let vehiculos = [carro1, carro2];
function comprarVehiculo(vehiculo, callback2, callback3) {
    const vehiculoEncontrado = vehiculos.find((v) => v.nome === vehiculo.nome);
    if (vehiculoEncontrado) {
        callback2(vehiculoEncontrado);
    }
    const carroObtenido = callback3(5);
    console.log(carroObtenido);
}
if ([1, 2, 3].some((el) => el === 1)) {
    32132321;
    312321;
}
function eliminarVehiculo(vehiculoParaEliminar) {
    if (vehiculoParaEliminar) {
        const filterVehiculos = vehiculos.filter((v) => v.nome !== vehiculoParaEliminar.nome);
        vehiculos = filterVehiculos;
    }
}
function obtenerCarrro(idCarro) {
    return carro1;
}
comprarVehiculo(carro1, () => eliminarVehiculo(carro1), () => obtenerCarrro(5));
let variabl1 = "312312";
variabl1 = 5;
const { ano, marca, preco } = carro1;
const [indice1, indice2] = vehiculos;
const vehiculosDescuento = vehiculos.map((vehiculo) => {
    var _a;
    return Object.assign(Object.assign({}, vehiculo), { preco: ((_a = vehiculo.preco) !== null && _a !== void 0 ? _a : 0) * 0.7 });
});
const filtrarCarros = vehiculos.filter((vehiculo) => {
    if (vehiculo.marca === 'Fiat') {
        return vehiculo;
    }
});
const montoTotal = vehiculos.reduce((acc, vehiculo) => {
    var _a;
    const suma = (_a = vehiculo.preco) !== null && _a !== void 0 ? _a : 0 + acc;
    return suma;
}, 0);
