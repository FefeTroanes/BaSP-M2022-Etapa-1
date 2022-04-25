var email = document.getElementById('email');
var password = document.getElementById('password');
var emailFlag = false;
var passwordFlag = false;
var passwordNumberFlag = 0;
var passwordLetterFlag = 0;
var numbers="0123456789";
var minusLetters="abcdefghyjklmnñopqrstuvwxyz";
var form = document.getElementById('loginForm');
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
// Email clear
function emailClear(e){
    if (emailFlag == false) {
        e.target.value = "";
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
    for(i=0; i<passwordValue.length; i++){
        if (numbers.indexOf(passwordValue.charAt(i),0)!=-1){
            console.log('tiene numeros');
            hasNumbers = true;
        } else {
            console.log('no tiene numeros');
        }
    }
    console.log('hasnumbers ' + hasNumbers);
    for(i=0; i<passwordValue.length; i++){
        if (letters.indexOf(passwordValue.charAt(i),0)!=-1){
            console.log('tiene letras');
            hasLetters = true;
        } else {
            console.log('no tiene numeros');
        }
    }
    console.log('hasletters ' + hasLetters);
    // for(i=0; i<passwordValue.length; i++){
    //     if (letters.indexOf(passwordValue.charAt(i),0)!=-1){
    //         console.log('tiene letras');
    //         hasLetters = true;
    //     } else {
    //         console.log('no tiene numeros');
    //     }
    // }
    for(i=0; i<passwordValue.length; i++){
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
    } else {
        console.log('password invalida');
    }
}

function passwordClear(e){
    var passwordValue = e.target.value;
    if (passwordFlag != true){
        e.target.value = "";
        // passwordNumberFlag = 0;
    }
}
//     var passwordArray = passwordValue.toLowerCase().split('');
//     console.log(passwordArray);




