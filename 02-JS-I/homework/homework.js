// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
var nuevaString = 'Nombre y Apellido';

// Crea una variable numérica, puede ser cualquier número:
var nuevoNum = 2021;

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
  
   return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  x = 10;
  y = 5;
  return (x + y);
  

}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  x = 10;
  y = 5;
  return (x - y);
  

}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  x = 10;
  y = 2;
  return x * y;
 
  
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
 return  x / y;
  
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
 if (x === y);
 {
   return true;
 }
  
}

function tienenMismaLongitud() {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
   var str1 = ("palabra");
   var str2 =("frase");
  return (str1.length = str2.length);
}  



function menosQueNoventa() {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num < 90) {
    return true;
  } else {
    return false;
  }

}

function mayorQueCincuenta() {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
 
   return(num > 50);  {
 
}
}



function obtenerResto() {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
 return x % y;
 

}

function esPar() {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if( num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}



function esImpar() {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if( num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

function elevarAlCuadrado() {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(num, 2);
}



function elevarAlCubo() {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
 
 return num * num * num;

}


function elevar() {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
 
 return Math.pow(num, exponent);
   
 }

function redondearNumero() {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
return Math.round(num);


}

function redondearHaciaArriba() {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  
  return Math.ceil(num);
}

function agregarSimboloExclamacion() {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return 'hello world' + '!';
  
}

function combinarNombres() {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
 str = 'Nombre';
 str2 = "Apellido";
 combinado = (str +' '+ str2);
 return combinado;
}

function obtenerSaludo() {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
 
 return 'Hola' + 'Jorge' + '!';

}

function obtenerAreaRectangulo() {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
 return (ancho * altura);
  
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
