// import { BaseDatos, Vehiculo, Venta } from "../interfaces"
import * as fs from "fs";
import { BaseDatos } from "../interfaces";

export const obtenerVentas = async () => {
  try {
    const data = fs.readFileSync("base_datos.json", "utf8");

    // Parsea el contenido JSON
    const jsonData:BaseDatos = JSON.parse(data);

    // Ahora jsonData contiene los datos del archivo JSON
    console.log(jsonData.clientes);
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
// const obtenerVehiculos = ():Vehiculo[] => {}
// const obtenerClientes = ():Cliente[] => {}
