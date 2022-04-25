var email = document.getElementById('email');
var emailOutput = document.getElementById('email-output');
var password = document.getElementById('password');
var passwordOutput = document.getElementById('password-output');
var emailFlag = false;
var passwordFlag = false;
// var passwordNumberFlag = 0;
// var passwordLetterFlag = 0;
// var numbers="0123456789";
// var minusLetters="abcdefghyjklmnñopqrstuvwxyz";
var form = document.getElementById('loginForm');
// var passwordValue = document.getElementById('email').value;
email.addEventListener('focus', emailClear);
email.addEventListener('blur', emailValidation);

// Email validation
function emailValidation(e) {
    if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.target.value)) {
        console.log('email valido');

        outputOk(email, emailOutput, 'email');
        // emailOutput.innerHTML = 'Valid email';
        // emailOutput.className = 'message-ok';
        // email.className = 'login-input-ok';

        return emailFlag = true;
    } else {
        console.log('email invalido');

        outputError(email, emailOutput, 'email');
        // emailOutput.innerHTML = 'Invalid email';
        // emailOutput.className = 'message-error';
        // email.className = 'login-input-error';

        return emailFlag = false;
    }
}
// Email clear
function emailClear(e){
    if (emailFlag == false) {
        e.target.value = "";
        // emailOutput.innerHTML = '';

        outputClear(email, emailOutput);

        // emailOutput.className = 'message-hidden';
        // email.className = 'login-input';
    }
}

//Form submit event
form.addEventListener('submit', showInputs);



//Mostrar inputs
function showInputs(e){
    e.preventDefault();
}

password.addEventListener('blur', passwordValidation);
password.addEventListener('focus', passwordClear);
//

function passwordValidation(e){
    var passwordValue = e.target.value;
    var hasNumbers = false;
    var hasLetters = false;
    var notANumberOrLetter = true;
    var numbers = '1234567890';
    var letters = 'abcdefghyjklmnñopqrstuvwxyz'
    var numerosyletras='abcdefghyjklmnñopqrstuvwxyz0123456789';
    for(var i=0; i<passwordValue.length; i++){
        if (numbers.indexOf(passwordValue.charAt(i),0)!=-1){
            console.log('tiene numeros');
            hasNumbers = true;
        } else {
            console.log('no tiene numeros');
        }
    }
    console.log('hasnumbers ' + hasNumbers);
    for(var i=0; i<passwordValue.length; i++){
        if (letters.indexOf(passwordValue.charAt(i),0)!=-1){
            console.log('tiene letras');
            hasLetters = true;
        } else {
            console.log('no tiene numeros');
        }
    }
    console.log('hasletters ' + hasLetters);

    for(var i=0; i<passwordValue.length; i++){
        if (numerosyletras.indexOf(passwordValue.charAt(i),0)==-1){
            console.log('tiene signos');
            notANumberOrLetter = false;
        } else {
            console.log('no tiene signos');
        }
    }
    console.log('letras y signos ' + notANumberOrLetter);
    if (hasNumbers == true && hasLetters == true && notANumberOrLetter == true){
        passwordFlag = true;
        console.log('password valida');
        outputOk(password, passwordOutput, 'password');
        // passwordOutput.innerHTML = 'Valid password';
        // passwordOutput.className = 'message-ok';
        // password.className = 'login-input-ok';
    } else {
        console.log('password invalida');
        outputError(password, passwordOutput, 'password');
        // passwordOutput.innerHTML = 'Invalid password';
        // passwordOutput.className = 'message-error';
        // password.className = 'login-input-error';
    }
}

function passwordClear(e){
    if (passwordFlag != true){
        e.target.value = "";
        // passwordNumberFlag = 0;
        outputClear(password, passwordOutput)

        // passwordOutput.className = 'message-hidden';
        // password.className = 'login-input';
    }
}

// Muestra la caja verde y el mensaje de input valido si estan bien ingresados
function outputOk(inputBox, outputMessage, type){
    outputMessage.innerHTML = 'Valid ' + type;
    outputMessage.className = 'message-ok';
    inputBox.className = 'login-input-ok';
}
// Muestra la caja roja y el mensaje de input invalido si estan mal ingresados
function outputError(inputBox, outputMessage, type){
    outputMessage.innerHTML = 'Invalid ' + type;
    outputMessage.className = 'message-error';
    inputBox.className = 'login-input-error';
}
// Borra el mensaje de los inputs y el color de la caja si hay que corregirlos
function outputClear(inputBox, outputMessage){
    outputMessage.className = 'message-hidden';
    inputBox.className = 'login-input';
}
