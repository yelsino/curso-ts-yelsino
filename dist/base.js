"use strict";
const carro1 = {
    nome: "Fiat",
    ano: 2020,
    preco: 100000,
    marca: "Fiat",
};
const carro2 = {
    nome: "Fiat",
    ano: 2020,
    preco: 100000,
    marca: "Fiat",
};
let vehiculos = [carro1, carro2];
const vehiculosDescuento = vehiculos.map((vehiculo) => {
    var _a;
    return Object.assign(Object.assign({}, vehiculo), { preco: (_a = vehiculo.preco) !== null && _a !== void 0 ? _a : 0 * 0.9 });
});
function comprarVehiculo(vehiculo) {
    const vehiculoEncontrado = vehiculos.find((v) => v.nome === vehiculo.nome);
    if (vehiculoEncontrado) {
        const filterVehiculos = vehiculos.filter((v) => v.nome !== vehiculo.nome);
        vehiculos = filterVehiculos;
    }
}
const variabl1 = '312312';
variabl1 = 5;
