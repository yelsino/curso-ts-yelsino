
const BDTienda = require

const valoresStrings = BDTienda.vehiculos.map((vehiculo) =>{

    return (`${vehiculo.precio}`)
    
    
    })
    
    console.log(valoresStrings)
    
    const resultado = valoresStrings.map((valor)=>{
    return  Number(valor)
    
    })
    console.log(resultado)