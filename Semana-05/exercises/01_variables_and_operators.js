/*
1.  Variables y operadores
a.  Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números
    en una 3er variable.
b.  Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
c.  Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando
    el resultado de la suma en una 3er variable (utilizar length).
*/

//a)
var number1 = 5;
var number2 = 3;
var numSum = number1 + number2;
console.log(numSum);

//b)
var string1 = 'Federico';
var string2 = 'Troanes';
var stringSum = string1 + string2;
console.log(stringSum);

//c
var stringLengthSum = string1.length + string2.length;
console.log(stringLengthSum);