// 13. Encuentra el vehículo más caro.

import { BDTienda } from "../BDTienda";

function carroCaro() {
  return BDTienda.vehiculos.reduce(
    (carroActual, carroSiguiente) => {
      return carroActual.precio > carroSiguiente.precio
        ? carroActual
        : carroSiguiente;
    }
  );
}

const carroMascaro = carroCaro();

console.log("El carro más caro es:");
console.log(carroMascaro);