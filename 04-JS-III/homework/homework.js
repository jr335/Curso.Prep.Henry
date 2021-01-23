// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
   array = [ 'Martin', 'Antonio', 'Sara', 'Samuel'];
  return array [0];
{



function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  array = [ 'Martin', 'Antonio', 'Sara', 'Samuel'];
  i=0
    return (array.length - 1);
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  array = [ 'Martin', 'Antonio', 'Sara', 'Samuel'];
  //return (array.length);
  return (array.length-1);
}
 

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var array = [ 1, 2, 3, 4];
  x = 0;
    
  for (var i = 0; i < array.length; i++) {
    otroarray= (array[i]+1) }
    return(otroarray);
}
  

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
array = ['Julio','Sofia','Juan'];
array.push = ('Marcelo');
array [array.length] = elemento;
return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  
  array = ('Julio','Sofia','Juan');
  elemento = 0
  array.unshift = ('Marcelo');
  array.unshift = elemento;
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
 palabras = ['welcome', 'to', 'Henry'];
  return palabras.join (' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  array = ['']
  elemento = "Hola"
  for(var i = 0; i < array.length; i++) {
    if(array[i] === elemento) {
      return true;
    }
  }
  return false;
}




function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for(var i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }
  return suma;
}





function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
     var resultadosTest = [1, 5, 7, 10];{
     suma = 0;
    for(i = 0; i < resultadosTest.length; i++){
        porcentaje = (suma = suma + numeros[i]); 
           porcentaje = porcentaje % 4; 
              return porcentaje;
  }
 }


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
 numeros = [1, 5, 7, 10];{
  
  var mayor = numeros[0];
   
  for(i = 0; i < numeros.length; i++){
      if (numeros[i] > mayor){
          mayor = numeros[i];
      }
  }
   return (mayor);
   
 }
  

}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if(arguments.length < 1) return 0;
  var producto = 1;
  for(var i = 0; i < arguments.length; i++) {
    producto = producto * arguments[i];
  }
  return producto;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,

};

