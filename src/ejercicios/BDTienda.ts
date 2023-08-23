enum Marcas {
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


// DATA 
export const BDTienda = {
    clientes: [
        {
            nombre: "Juan PÃ©rez",
            documento: "77068189",
            codigo: "CL-001",
        },
        {
            nombre: "MarÃ­a GarcÃ­a",
            documento: "67068189",
            codigo: "CL-002",
        },
        {
            nombre: "Carlos RodrÃ­guez",
            documento: "27068189",
            codigo: "CL-003",
        },
    ],
    vehiculos: [
        {
            nombre: "Ford Mustang",
            marca: Marcas.FORD,
            vendido: false,
            precio: 5000,
            codigo: "VL-001",
        },
        {
            nombre: "Chevrolet Camaro",
            marca: Marcas.CHEVROLET,
            vendido: false,
            precio: 6000,
            codigo: "VL-002",
        },
        {
            nombre: "Toyota Corolla",
            marca: Marcas.TOYOTA,
            vendido: false,
            precio: 7000,
            codigo: "VL-003",
        },
        {
            nombre: "Honda Civic",
            marca: Marcas.HONDA,
            vendido: false,
            precio: 5500,
            codigo: "VL-004",
        },
        {
            nombre: "Nissan GT-R",
            marca: Marcas.NISSAN,
            vendido: false,
            precio: 8000,
            codigo: "VL-005",
        },
        {
            nombre: "Mazda MX-5",
            marca: Marcas.TOYOTA,
            vendido: false,
            precio: 4500,
            codigo: "VL-006",
        },
        {
            nombre: "BMW M3",
            marca: Marcas.FORD,
            vendido: false,
            precio: 9000,
            codigo: "VL-007",
        },
        {
            nombre: "Mercedes-Benz C-Class",
            marca: Marcas.CHEVROLET,
            vendido: false,
            precio: 8500,
            codigo: "VL-008",
        },
        {
            nombre: "Audi A4",
            marca: Marcas.HONDA,
            vendido: false,
            precio: 7500,
            codigo: "VL-009",
        },
        {
            nombre: "Volkswagen Golf",
            marca: Marcas.NISSAN,
            vendido: false,
            precio: 4000,
            codigo: "VL-010",
        },
    ],
    ventas: [
        {
            cliente: "CL-001",
            vehiculo: "VL-006",
            fechaCompra: "2003-12-01",
            codigo: "COMP-0001",
        },
        {
            cliente: "CL-002",
            vehiculo: "VL-007",
            fechaCompra: "2003-12-02",
            codigo: "COMP-0002",
        },
        {
            cliente: "CL-003",
            vehiculo: "VL-008",
            fechaCompra: "2003-12-03",
            codigo: "COMP-0003",
        },
        {
            cliente: "CL-001",
            vehiculo: "VL-009",
            fechaCompra: "2003-12-04",
            codigo: "COMP-0004",
        },
        {
            cliente: "CL-002",
            vehiculo: "VL-010",
            fechaCompra: "2003-12-05",
            codigo: "COMP-0005",
        },
        {
            cliente: "CL-003",
            vehiculo: "VL-003",
            fechaCompra: "2003-12-06",
            codigo: "COMP-0006",
        },
        {
            cliente: "CL-001",
            vehiculo: "VL-005",
            fechaCompra: "2003-12-07",
            codigo: "COMP-0007",
        },
        {
            cliente: "CL-002",
            vehiculo: "VL-002",
            fechaCompra: "2003-12-08",
            codigo: "COMP-0008",
        },
        {
            cliente: "CL-003",
            vehiculo: "VL-004",
            fechaCompra: "2003-12-09",
            codigo: "COMP-0009",
        },
        {
            cliente: "CL-001",
            vehiculo: "VL-001",
            fechaCompra: "2003-12-10",
            codigo: "COMP-0010",
        },
    ],
};
