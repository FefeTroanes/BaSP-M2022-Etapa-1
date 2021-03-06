var email = document.getElementById('email');
var emailOutput = document.getElementById('email-output');
var password = document.getElementById('password');
var passwordOutput = document.getElementById('password-output');
var emailFlag = false;
var passwordFlag = false;
var modalTittle = document.getElementById('modal-header');
var emailModalText = document.getElementById('email-modal-text');
var passwordModalText = document.getElementById('password-modal-text');

email.addEventListener('focus', emailClear);
email.addEventListener('blur', emailValidation);

function emailValidation(e) {
    if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(e.target.value)) {
        outputOk(email, emailOutput, 'email');
        return emailFlag = true;
    } else {
        outputError(email, emailOutput, 'email');
        return emailFlag = false;
    }
}

function emailClear(e){
    if (emailFlag == false) {
        // e.target.value = "";
        outputClear(email, emailOutput);
        email.className= 'login-input';
    }
}

password.addEventListener('blur', passwordValidation);
password.addEventListener('focus', passwordClear);

function passwordValidation(e){
    var passwordValue = e.target.value;
    var hasNumbers = false;
    var hasLetters = false;
    var notANumberOrLetter = true;
    var numbers = '1234567890';
    var letters = 'abcdefghyjklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
    var numerosyletras='abcdefghyjklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789';
    for(var i=0; i<passwordValue.length; i++){
        if (numbers.indexOf(passwordValue.charAt(i),0)!=-1){
            hasNumbers = true;
        }
    }
    for(var i=0; i<passwordValue.length; i++){
        if (letters.indexOf(passwordValue.charAt(i),0)!=-1){
            hasLetters = true;
        }
    }
    for(var i=0; i<passwordValue.length; i++){
        if (numerosyletras.indexOf(passwordValue.charAt(i),0)==-1){
            notANumberOrLetter = false;
        }
    }
    if (hasNumbers == true && hasLetters == true && notANumberOrLetter == true){
        passwordFlag = true;
        outputOk(password, passwordOutput, 'password');
    } else {
        outputError(password, passwordOutput, 'password');
    }
}

function passwordClear(e){
    if (passwordFlag != true){
        outputClear(password, passwordOutput)
    }
}

function outputOk(inputBox, outputMessage, type){
    outputMessage.innerHTML = 'Valid ' + type;
    outputMessage.className = 'message-ok';
    inputBox.className = 'login-input-ok';
}

function outputError(inputBox, outputMessage, type){
    outputMessage.innerHTML = 'Invalid ' + type;
    outputMessage.className = 'message-error';
    inputBox.className = 'login-input-error';
}

function outputClear(inputBox, outputMessage){
    outputMessage.className = 'message-hidden';
    inputBox.className = 'login-input';
}

function outputRequired(inputBox, outputMessage){
    outputMessage.innerHTML = 'This field is required';
    outputMessage.className = 'message-error';
    inputBox.className = 'login-input-error';
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(e) {
    e.preventDefault();
    if (email.value.length == 0){
        outputRequired(email, emailOutput);
    } else if (password.value.length == 0) {
        outputRequired(password, passwordOutput);
    } else {
        modal.className = 'modal-display-block';
        if (emailFlag == false){
            modalTittle.textContent = 'Login failed';
            emailModalText.textContent = 'Email: ' + email.value + ' not valid';
        } else if (passwordFlag == false) {
            modalTittle.textContent = 'Login failed';
            passwordModalText.textContent = 'Password: ' + password.value + ' not valid';
        } else {
            fetch("https://basp-m2022-api-rest-server.herokuapp.com/login".concat("?email=", email.value, "&password=", password.value))
                .then(response => response.json())
                .then(data => {
                    if (data.success){
                        console.log('esta re bien: ',data.msg)

                        modalTittle.textContent = data.msg;
                        emailModalText.textContent = 'Email: ' + email.value + ' valid';
                        passwordModalText.textContent = 'Password: ' + password.value + ' valid';
                    } else {
                        throw data;
                    } })
                .catch(error => {
                    console.log('error: ',error);
                    modalTittle.textContent = error.msg;
                    emailModalText.textContent = 'Email: ' + email.value;
                    passwordModalText.textContent = 'Password: ' + password.value;
                })

                }
        }
    }

span.onclick = function() {
    modal.className = "modal-display-none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.className = "modal-display-none";
    }
}