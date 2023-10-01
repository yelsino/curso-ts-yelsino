// import { BaseDatos, Vehiculo, Venta } from "../interfaces"
import * as fs from "fs";
import { BaseDatos, Cliente, Vehiculo, Venta } from "../interfaces";

export const obtenerVentas: Promise<Venta[]> = new Promise(
  (resolve, reject) => {
    try {
      const data = fs.readFileSync("base_datos.json", "utf8");

      // Parsea el contenido JSON
      const jsonData: BaseDatos = JSON.parse(data);

      const ventas = jsonData.ventas;

      resolve(ventas);
    } catch (error) {
      console.log("ERROR al leer o parsear JSON: ", error);
      reject(error);
    }
  }
);

export const obtenerVehiculos: Promise<Vehiculo[]> = new Promise(
  (resolve, reject) => {
    try {
      const data = fs.readFileSync("base_datos.json", "utf8");

      // Parsea el contenido JSON
      const jsonData: BaseDatos = JSON.parse(data);

      const vehiculos = jsonData.vehiculos;

      resolve(vehiculos);
    } catch (error) {
      console.log("ERROR al leer o parsear JSON: ", error);
      reject(error);
    }
  }
);

export const obtenerClientes: Promise<Cliente[]> = new Promise(
  (resolve, reject) => {
    try {
      const data = fs.readFileSync("base_datos.json", "utf8");

      // Parsea el contenido JSON
      const jsonData: BaseDatos = JSON.parse(data);

      const clientes = jsonData.clientes;

      resolve(clientes);
    } catch (error) {
      console.log("ERROR al leer o parsear JSON: ", error);
      reject(error);
    }
  }
);
