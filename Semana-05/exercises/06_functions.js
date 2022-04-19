console.log('--EXERCISE 6: FUNCTIONS');

//a.Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
//  resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Exercise 6.a:');

var result;
var firstNumber = prompt('Type a number');
var secondNumber = prompt('Type another number');
function sum (number1 , number2) {
    result = number1 + number2;
    return console.log('El resultado es: ' + result);
}
sum(firstNumber,secondNumber);

//b.A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
//  mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('-Exercise 6.b:');

function numberValidation (number1 , number2) {
    if (isNaN(number1) || isNaN(number2))  {
        alert('It is not a number');
        return console.log(NaN);
    } else {
        result = firstNumber + secondNumber;
        return console.log('El resultado es: ' + result);
    }
}
numberValidation(firstNumber, secondNumber);

//c.Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('-Exercise 6.c:');

function  validateInteger (parameter) {
    if (parameter == parseInt(parameter)) {
        return true;
    } else {
        return console.log('es un numero decimal');
    }
}
validateInteger(firstNumber);
validateInteger(secondNumber);

//d.A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya
//  decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

console.log('-Exercise 6.d:');

function numberValidation (number1 , number2) {
    if (isNaN(number1) || isNaN(number2))  {
        alert('It is not a number');
        return console.log(NaN);
    } else if (validateInteger(number1) !== true) {
        alert('El primer numero no es entero, se convertira');
        console.log(Math.round(number1));
        firstNumber = Math.round(number1);
    } else if (validateInteger(number2) !== true){
        alert('El segundo numero no es entero, se convertira');
        console.log(Math.round(number2));
        secondNumber = Math.round(number2);
    } else {
        alert('Ambos numeros son enteros, se van a sumar');
    }
    result = firstNumber + secondNumber;
    return console.log('El resultado es: ' + result);
}
numberValidation(firstNumber, secondNumber);

//e.Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que
//  todo siga funcionando igual.

console.log('-Exercise 6.e:');

function numberValidationSecond (number1 , number2) {
    if (isNaN(number1) || isNaN(number2))  {
        alert('It is not a number');
        return console.log(NaN);
    } else if (validateInteger(number1) !== true) {
        alert('El primer numero no es entero, se convertira');
        console.log(Math.round(number1));
        firstNumber = Math.round(number1);
    } else if (validateInteger(number2) !== true){
        alert('El segundo numero no es entero, se convertira');
        console.log(Math.round(number2));
        secondNumber = Math.round(number2);
    }
}

function sumSecond(number1 , number2) {
    numberValidationSecond(number1, number2);
    result = firstNumber + secondNumber;
    return console.log('El resultado es: ' + result);
}
sumSecond(firstNumber, secondNumber);