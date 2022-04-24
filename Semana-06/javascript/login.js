var email = document.getElementById('email');
var password = document.getElementById('password');
var emailFlag = false;
var passwordNumberFlag = 0;
var passwordLetterFlag = 0;
var numbers="0123456789";
var minusLetters="abcdefghyjklmnñopqrstuvwxyz";
// var passwordValue = document.getElementById('email').value;
email.addEventListener('focus', emailClear);
email.addEventListener('blur', emailValidation);

// Email validation
function emailValidation(e) {
    if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.target.value)) {
        console.log('email valido');
        return emailFlag = true;
    } else {
        console.log('email invalido');
        return emailFlag = false;
    }
}

function emailClear(e){
    if (emailFlag == false) {
        e.target.value = "";
    }
}

password.addEventListener('blur', passwordValidation);
password.addEventListener('focus', passwordClear);
//
function passwordValidation(e){
    var passwordValue = e.target.value;
    console.log('passwordValue: ' + passwordValue);

    //letter validation
    for (var i = 0; i < passwordValue.length; i++){
        if (isNaN(passwordValue[i]) == true){
            console.log('tiene letras');
        } else {
            console.log('no tiene letras');
            passwordLetterFlag += 1;
        }
    }
    //number validation
    for (var i = 0; i < passwordValue.length; i++){
        if (isNaN(passwordValue[i]) != true){
            console.log('tiene numeros');
        } else {
            console.log('no tiene numeros');
            passwordNumberFlag += 1;
        }
    }
    if (passwordNumberFlag != 0 || passwordLetterFlag != 0 || passwordValue.length == 0) {
        console.log('Contrasenia invalida');
    } else {
        console.log('contasenia valida');
    }
    console.log('passwordletterflag: ' + passwordLetterFlag);
    console.log('passwordnumberflag: ' + passwordNumberFlag);
}

function passwordClear(e){
    var passwordValue = e.target.value;
    if (passwordNumberFlag != 0 || passwordValue.length == 0){
        passwordValue = "";
        passwordNumberFlag = 0;
    }
}
//     var passwordArray = passwordValue.toLowerCase().split('');
//     console.log(passwordArray);




