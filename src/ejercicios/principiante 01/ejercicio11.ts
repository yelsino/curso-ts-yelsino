// OPERADOR TERNARIO
/**
 * Sirve para comparar valores como el if
 */

function operadorTernario() {
    const positivo = true;
    // const negativo = false;

    const resultado = positivo !== true 
        ? "es positivo" 
        : "es negativo";

   return console.log(resultado);
   
}


operadorTernario()