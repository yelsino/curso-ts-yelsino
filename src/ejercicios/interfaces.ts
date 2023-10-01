export enum Marcas {
  TOYOTA = "Toyota",
  FORD = "Ford",
  CHEVROLET = "Chevrolet",
  HONDA = "Honda",
  NISSAN = "Nissan",
}

export interface Cliente {
  nombre: string;
  documento: string;
  codigo: string;
}

export interface Vehiculo {
  nombre: string;
  marca: Marcas;
  vendido: true;
  precio: number;
  codigo: string;
}

export interface Venta {
  cliente: string;
  vehiculo: string;
  fechaCompra: string;
  codigo: string;
}

export interface BaseDatos {
  clientes: Cliente[];
  ventas: Venta[];
  vehiculos: Vehiculo[];
}
