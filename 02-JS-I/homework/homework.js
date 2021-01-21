// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
var nuevaString = 'Nombre y Apellido';

// Crea una variable numérica, puede ser cualquier número:
var nuevoNum = 08012021;

// Crea una variable booleana:
var nuevoBool = true;

// Resuelve el siguiente problema matemático:
var nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
var nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
var nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString() {
  // "Return" la string provista: str
  // Tu código:
  
  var str= str.length;
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  x = 10;
  y = 5;
  var resultado = x + y;
  return resultado;

}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  x = 10;
  y = 5;
  var totalresta = x - y;
  return totalresta;

}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  x = 10;
  y = 2;
  var producto = x * y;
  return producto;

  
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var division = x / y;
  return division;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
 if (x = y)
 {
   return true;
 }
 return false;
}

function tienenMismaLongitud() {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
   var str1 = ("palabra");
   var str2 =("frase");
  if (str1 = str2)
  {
    return true;
  } 
    return false;
  

  }
 


function menosQueNoventa() {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  argumento = 80
  num > 50;
  if (argumento < 90){

    return true;
  }
  return false;  

}






function mayorQueCincuenta() {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  argumento = 80
  num > 50;
  if (argumento > num)
  {
 return true;
  }
  return false;  


}

function obtenerResto() {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  x = 25;
  y = 4;
 resto =(x % y === 1)
 {
  return resto;
 }
 

}

function esPar() {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
 num = 4;
 if (num = num * 2)
 {
   return true;
 }
 return false;
}



function esImpar() {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
 num = 4;
 numImpar = (num = num + 1);
 if (numImpar = 5)
 {
 return true;

 }
return false;
}

function elevarAlCuadrado() {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
   num = 50;
   cuadrado = (num * 2);
   return cuadrado;

}

function elevarAlCubo() {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
 num = 30;
 cuboNum = (num * 3)
 return cuboNum;

}


function elevar() {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
 num = 30;
 exponent = 2;
 elevado= Math.pow(num, exponent);
    return elevado;
 }

function redondearNumero() {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
num = 6,9998
redondear = Math.round(num);
return redondear;

}

function redondearHaciaArriba() {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  num = 6,9999;
  haciarriba = Math.ceil(num);
  return haciarriba;
}

function agregarSimboloExclamacion() {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  str ='hello world';
  saludo = '!';
  nuevaString = str + saludo;
  return nuevaString;
}

function combinarNombres() {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
 str = 'Nombre';
 str2 = "Apellido";
 Combinados = (str +' '+ str2);
 return Combinados;
}

function obtenerSaludo() {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
 strSaludo = 'Hola';
 nombre = 'Jorge';
 apellido = 'Fernández';
 unir = (`${strSaludo} ${nombre}${apellido}`);
 return unir; 

}

function obtenerAreaRectangulo() {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
 altura = 5;
 ancho = 10;
 area = (ancho * altura);
 return area;
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
