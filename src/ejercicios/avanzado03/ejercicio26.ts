import { obtenerVentas } from "./fetch";

// 26. Calcula el total de ventas realizadas en el mes de diciembre.
/**
 *  obtener ventas y trabajar con su atributo fechaCompra -> "2023-12-01"
 *  podria obtener el valor medio que hace referencia al mes de la fecha
 *  podria convertir el valor "2023-12-01" a fecha y obtener a que mes le corresponde
 *  obtener ventas de una mes en especifico
 *  obtener vehiculo de cada compra de diciembre para obtener el precio, por cada venta
 *  sumar los precios
 * entregar datos correspondientes, monto,fecha,cantidad ventas,
 */

interface VentaMes {
  mes: string;
  monto: number;
  cantidadVentas: number;
}

function calcularVentasEnDiciembre(): VentaMes {
  const ventas = obtenerVentas();
  // Filtrar las ventas que ocurrieron en diciembre
  // const ventasEnDiciembre:Venta[] = BDTienda.ventas.filter((venta) => {
  //   const fechaCompra = new Date(venta.fechaCompra);
  //   return fechaCompra.getMonth() === 11;
  // });

  // Calcular el total de ventas en diciembre sumando los precios de los vehículos vendidos
  // const totalVentasEnDiciembre = ventasEnDiciembre.reduce((total, venta) => {
  //   const vehiculo = BDTienda.vehiculos.find(
  //     (veh) => veh.codigo === venta.vehiculo
  //   );
  //   if (vehiculo) {
  //     return total + vehiculo.precio;
  //   }
  //   return total;
  // }, 0);

  return {
    cantidadVentas: 0,
    mes: "diciembre",
    monto: 0,
  };
  // return {
  //   cantidadVentas: ventasEnDiciembre.length,
  //   mes: "diciembre",
  //   monto: totalVentasEnDiciembre,
  // };
}

calcularVentasEnDiciembre();
