console.log('--EXERCISE 2: STRINGS');

// a.  Crear una variable de tipo string con al menos 10 caracteres y convertir
//       todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 1.a:');
var string1 = 'federico troanes';
string1 = string1.toUpperCase();
alert('2)a. = ' + string1);

/*  b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
    caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Exercise 2.b:');
var string2 = 'federico troanes';
var string_2a = string2.substring(0,5);
alert('2)b. ' + string_2a);

/*  c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
    guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Exercise 2.c:');
var string3 = 'federico troanes';
var string_2c = string3.substring(string3.length - 3, string3.length);
alert('2)c. ' + string_2c);

/*  d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
    mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
    (utilizar substring, toUpperCase, toLowerCase y el operador +). */

console.log('-Exercise 2.d:');
var string4 = 'federico troanes';
var string_2d = string4[0].toUpperCase() + string4.substring(1).toLowerCase();
alert('2)d. ' + string_2d);

/*  e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
    primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log('-Exercise 2.e:');
var string5 = 'federico troanes';
var blankSpaceIndex = string5.indexOf(' ');
alert('2)e. ' + blankSpaceIndex);

/*  f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
    Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
    palabras en mayúscula y las demás letras en minúscula
    (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

console.log('-Exercise 2.f:');
var string6 = 'federico troanes';
var firstLettersToUpperCase = string6[0].toUpperCase() +        //La primer letra de la primer palabra
    string6.substring(1, string6.indexOf(' ')) +                //El resto de la primer palabra
    ' ' +                                                       //Espacio
    string6[string6.indexOf(' ') + 1].toUpperCase() +           //La primer letra de la segunda palabra
    string6.substring(string6.indexOf(' ') + 2).toLowerCase();  //El resto de la segunda palabra
alert('2)f. ' + firstLettersToUpperCase);