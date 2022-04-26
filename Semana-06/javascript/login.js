var email = document.getElementById('email');
var emailOutput = document.getElementById('email-output');
var password = document.getElementById('password');
var passwordOutput = document.getElementById('password-output');
var emailFlag = false;
var passwordFlag = false;
var modalTittle = document.getElementById('modal-header');
var emailModalText = document.getElementById('email-modal-text');
var passwordModalText = document.getElementById('password-modal-text');
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
    if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(e.target.value)) {
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
// Verifica que no este el campo vacio
function outputRequired(inputBox, outputMessage){
    outputMessage.innerHTML = 'This field is required';
    outputMessage.className = 'message-error';
    inputBox.className = 'login-input-error';
}

// //////////////MODAL//////////////////
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    if (email.value.length == 0){
        outputRequired(email, emailOutput);
    } else if (password.value.length == 0) {
        outputRequired(password, passwordOutput);
    } else {
        modal.style.display = "block";
        if (emailFlag == false){
            modalTittle.textContent = 'Login failed';
            emailModalText.textContent = 'Email: ' + email.value + ' not valid';
        } else if (passwordFlag == false) {
            modalTittle.textContent = 'Login failed';
            passwordModalText.textContent = 'Password: ' + password.value + ' not valid';
        } else {
            modalTittle.textContent = 'Logged in';
            emailModalText.textContent = 'Email: ' + email.value + ' valid';
            passwordModalText.textContent = 'Password: ' + password.value + ' valid';
        }
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}