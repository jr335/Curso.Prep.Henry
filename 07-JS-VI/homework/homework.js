// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
cb();

}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //numeros = [1 , 2 , 3 , 4]
  var total = numeros.reduce (function (acc, elemento) {
  return acc + elemento;
  }) 
  cb(total)
}


function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
   array.forEach (function(elemento) {
   cb(elemento);
    
   })
 
}



function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
   //var nuevoArray = array.length
   var nuevoArray = array.map(function(elemento) {

    return cb(elemento);
  });
  return nuevoArray;
  }



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
