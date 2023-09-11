export enum Marcas {
    TOYOTA = "Toyota",
    FORD = "Ford",
    CHEVROLET = "Chevrolet",
    HONDA = "Honda",
    NISSAN = "Nissan",
}

export interface Vehiculo {
    nombre: string;
    marca: Marcas;
    vendido: false;
    precio: number;
    codigo: string;
}

export interface Cliete {
    nombre: string;
    documento: string;
    codigo: string;
}

export interface Venta {
    cliente: Cliete;
    vehiculo: Vehiculo;
    fechaCompra: Date;
    codigo: string;
}