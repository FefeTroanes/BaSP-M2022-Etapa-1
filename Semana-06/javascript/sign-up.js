//HTML Objects
var littleName = document.getElementById('name');
var lastname = document.getElementById('lastname');
var dni = document.getElementById('dni');
var birthDate = document.getElementById('birthDate');
var telephone = document.getElementById('telephone');
var address = document.getElementById('address');
var city = document.getElementById('city');
var postalCode = document.getElementById('postalCode');
var email = document.getElementById('email');
var password1 = document.getElementById('password1');
var password2 = document.getElementById('password2');
var password1Copy;

//Flags
var littleNameValid = false;
var lastNameValid = false;
var dniValid = false;
var birthdayValid = false;
var telephoneValid = false;
var addressValid = false;
var cityValid = false;
var postalCodeValid = false;
var emailSignupValid = false;
var password1Valid = false;
var password2Valid = false;

// Bueno ahora si send help :joy:
//     Pude validar si los strings son solo texto o solo numeros, pero no logro hacer que ande si tiene ambos. Debe haber algo que no estoy viendo

//Event listeners
littleName.addEventListener('blur', verifyName);
littleName.addEventListener('focus', littleNameClear);
lastname.addEventListener('blur', verifyLastname);
lastname.addEventListener('focus',lastnameClear);
dni.addEventListener('blur', verifyDNI);
dni.addEventListener('focus', dniClear)
birthDate.addEventListener('blur', verifyBirthdate);
birthDate.addEventListener('focus', birthdayClear);
telephone.addEventListener('blur', verifyTelephone); //Solo número y debe tener 10 números
telephone.addEventListener('focus', telephoneClear);
address.addEventListener('blur', verifyAddress);
address.addEventListener('focus', addressClear);
city.addEventListener('blur', verifyCity);
city.addEventListener('focus', cityClear);
postalCode.addEventListener('blur', verifyPostalCode);
postalCode.addEventListener('focus', postalCodeClear);
email.addEventListener('blur', verifySignupEmail);
email.addEventListener('focus', emailSignupClear);
password1.addEventListener('blur', verifyPassword1);         //Al menos 8 caracteres, formados por letras y números
password1.addEventListener('focus', password1Clear);
password2.addEventListener('blur', verifyPassword2);         //Al menos 8 caracteres, formados por letras y números
password2.addEventListener('focus', password2Clear);

// Valida el nombre => Solo letras y debe tener más de 3 letras
function verifyName(e){
    console.log(e.target.value);
    inputValue = e.target.value;
    if (verifyLetter(inputValue, 3) == false) {
        littleNameValid = false;
        return console.log('bandera de nombre mal: '+ littleNameValid);
    } else {
        littleNameValid = true;
        return console.log('bandera del nombre bien: ' + littleNameValid);
    }
}
// Limpia el nombre si esta mal
function littleNameClear(e) {
    if (inputClear(littleNameValid)){
        e.target.value = "";
    }
}

//Valida el apellido => Solo letras y debe tener más de 3 letras.
function verifyLastname(e){
    inputValue = e.target.value;
    if (verifyLetter(inputValue, 3) == false) {
        lastNameValid = false;
        return console.log('bandera del apellido mal: '+ lastNameValid);
    } else {
        lastNameValid = true;
        return console.log('bandera del apellido bien: ' + lastNameValid);
    }
}
// Limpia el apellido si esta mal
function lastnameClear(e) {
    if (inputClear(lastNameValid)){
        e.target.value = "";
    }
}

// Valida el dni => Solo número y debe tener más de 7 números
function verifyDNI(e){
    console.log(e.target.value);
    inputValue = e.target.value;
    if (verifyNumber(inputValue, 7) == false) {
        console.log('bandera del dni mal');
        return dniValid = false;
    } else {
        console.log('bandera del dni bien');
        return dniValid = true;
    }
}
// Limipia el dni si esta mal
function dniClear(e){
    if (inputClear(dniValid)){
        e.target.value = "";
    }
}

//Valida la fecha de nacimiento => Con formato dd/mm/aaaa
function verifyBirthdate(e){
    inputValue = e.target.value;
    if (verifyNumber(inputValue, 8) == false) {
        console.log('bandera del cumpleanios mal');
        return birthdayValid = false;
    } else {
        console.log('bandera del cumpleanios bien');
        var day = inputValue.substring(0,2);
        var month = inputValue.substring(2,4);
        var year = inputValue.substring(4);
        console.log('el dia es '+day + 'mes' + month + 'anio' + year);
        e.target.value = day + '/' + month + '/' + year;
        return birthdayValid = true;
    }
}
//Limpia la fecha si esta mal
function birthdayClear(e){
    if (inputClear(birthdayValid)){
        e.target.value = "";
    }
}

//Valida el telefono => Solo número y debe tener 10 números
function verifyTelephone(e){
    inputValue = e.target.value;
    if (verifyNumber(inputValue, 10) == false) {
        console.log('bandera del telefono mal');
        return telephoneValid = false;
    } else {
        console.log('bandera del telefono bien');
        return telephoneValid = true;
    }
}
//Limpia el telefono si esta mal
function telephoneClear(e){
    if (inputClear(telephoneValid)){
        e.target.value = "";
    }
}

//Valida la direccion => Al menos 5 caracteres con letras, números y un espacio en el medio
function verifyAddress(e) {
    var inputValue = e.target.value
    var addressNumbersFlag = false;
    var addressLettersFlag = false;
    var addressSpaceFlag = false
    var blankSpaceIndex = inputValue.indexOf(' ');
    if (hasItNumbers(inputValue)){
        addressNumbersFlag = true;
    }
    console.log('addressNumbersFlag: '+ addressNumbersFlag);
    if (hasItLetters(inputValue)){
        addressLettersFlag = true;
    }
    console.log('addressLettersFlag: ' + addressLettersFlag);
    if (blankSpaceIndex > 0 && blankSpaceIndex < (inputValue.length - 1)){
        console.log('tiene un espacio');
        addressSpaceFlag = true;
    } else {
        console.log('no tiene espacio');
    }
    if (addressNumbersFlag == true && addressNumbersFlag == true && addressSpaceFlag == true){
        addressValid = true;
        console.log('direccion valida: ' + addressValid);
    } else {
        console.log('Direccion invalida: ' + addressValid);
    }
}
// Limpia la direccion si esta mal
function addressClear(e){
    if (inputClear(addressValid)){
        e.target.value = "";
    }
}

//Valida la ciudad => Puede tener letras y numeros y debe tener más de 3 letras
function verifyCity(e) {
    var inputValue = e.target.value;
    var inputValueLength = inputValue.length;
    var inputValueLengthFlag = false;
    var anythingElseThanANumberOrALetter = true;
    if (hasNumbersOrLetters(inputValue) == false){
        console.log('tiene signos SEGUNDO');
        anythingElseThanANumberOrALetter = false;
    }
    if (inputValueLength > 3){
        inputValueLengthFlag = true;
        console.log('tiene mas de 3 caracteres' + inputValueLengthFlag);

    } else {
        console.log('tiene menos de 3 caracteres');
    }
    if (inputValueLengthFlag == true && anythingElseThanANumberOrALetter == true){
        cityValid = true;
        console.log('ciudad valida ' + cityValid);
    } else {
        console.log('ciudad invalida');
    }
}
// Limpia la ciudad si esta mal
function cityClear(e){
    if (inputClear(cityValid)){
        e.target.value = "";
    }
}

// Valida la password => Al menos 8 caracteres, formados por letras y números
function verifyPassword1(e){
    var inputValue = e.target.value
    var passwordNumbersFlag = false;
    var passwordLettersFlag = false;
    var emptyString = true;
    if (hasItNumbers(inputValue)){
        passwordNumbersFlag = true;
    }
    console.log('passwordNumbersFlag: '+ passwordNumbersFlag);
    if (hasItLetters(inputValue)){
        passwordLettersFlag = true;
    }
    console.log('passwordLettersFlag: ' + passwordLettersFlag);
    if (inputValue.length > 0) {
        emptyString = false;
    }
    if (passwordNumbersFlag == true && passwordLettersFlag == true && emptyString == false){
        password1Valid = true;
        console.log('password valida: ' + password1Valid);
        password1Copy = inputValue;
    } else {
        console.log('Password invalida: ' + password1Valid);
    }
}
// Limpia la contraseña si esta mal
function password1Clear(e){
    if (inputClear(password1Valid)){
        e.target.value = "";
    }
}

//Valida la confirmacion de la contraseña
function verifyPassword2(e) {
    inputValue = e.target.value;
    if (inputValue === password1Copy) {
        password2Valid = password1Valid;
        console.log('es igual: ' + password2Valid);
    } else {
        console.log('es distinta');
    }
}
//Limpia la confirmacion de la contraseña si esta mal
function password2Clear(e) {
    if (inputClear(password2Valid)){
        e.target.value = "";
    }
}

// Valida el codigo postal => Solo números y debe tener entre 4 y 5 números
function verifyPostalCode(e) {
    var flag = 0;
    inputValue = e.target.value;
    for (var i = 0; i < inputValue.length; i++) {
        if (isNaN(inputValue[i]) == true) {
            console.log('no tiene numeros');
            flag += 1;
        } else {
            console.log('tiene numeros');

        }
    }
    console.log(inputValue.length);
    if ((inputValue.length == 4 || inputValue.length == 5) && flag == 0) { //
        console.log('flag: ' + flag);
        console.log('codigo postal valido');
        return postalCodeValid = true;
    } else {
        console.log('codigo postal invalido, value.length: ' + inputValue.length);
        return postalCodeValid = false;
    }
}
// Limpia el CP si esta mal
function postalCodeClear(e){
    if (inputClear(postalCodeValid)){
        e.target.value = "";
    }
}

// Valida el email => Debe tener un formato de email válido
function verifySignupEmail(e) {
    if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.target.value)) {
        console.log('email valido');
        return emailSignupValid = true;
    } else {
        console.log('email invalido');
        return emailSignupValid = false;
    }
}
// Limpia el email si esta mal
function emailSignupClear(e){
    if (emailSignupValid == false) {
        e.target.value = "";
    }
}

//Valida si el string tiene numeros ignorando las letras
function hasItNumbers(inputValue) {
    var numbers = '1234567890';
    for (i = 0; i < inputValue.length; i++) {
        if (numbers.indexOf(inputValue.charAt(i), 0) != -1) {
            console.log('tiene numeros');
            return true;
        } else {
            console.log('no tiene numeros');
        }
    }
}

//Valida si el string tiene letras ignorando los numeros
function hasItLetters(inputValue){
    var letters = 'abcdefghyjklmnñopqrstuvwxyz'
    for(i=0; i<inputValue.length; i++){
        if (letters.indexOf(inputValue.charAt(i),0)!=-1){
            console.log('tiene letras');
            return true;
        } else {
            console.log('no tiene letras');
        }
    }
}

//Valida que el string no tenga otra cosa que no sean numeros o letras
function hasNumbersOrLetters(inputValue){
    var numerosyletras='abcdefghyjklmnñopqrstuvwxyz0123456789';
    for(i=0; i<inputValue.length; i++){
        if (numerosyletras.indexOf(inputValue.charAt(i),0)==-1){
            console.log('tiene signos');
            return false;
        } else {
            console.log('no tiene signos');
            return true;
        }
    }
}

// Verifica si el string SOLO tiene letras
function verifyLetter(value, minLength) {
    var flag = 0;
    console.log('value: '+ value);
    console.log('minlength: ' + minLength);
    for (var i = 0; i < value.length; i++) {
        if (isNaN(value[i]) == true) {
            console.log('tiene letras');
        } else {
            console.log('no tiene letras');
            flag += 1;
        }
    }
    if (value.length < minLength || flag > 0) {
        console.log('Nombre invalido');
        return false;
    } else {
        console.log('nombre valido, value.length: '+ value.length);
        return true;
    }
}

// Verifica si el string SOLO tiene numeros
function verifyNumber(value, minLength){
    var flag = 0;
    console.log('value: '+ value);
    console.log('minlength: ' + minLength);
    for (var i = 0; i < value.length; i++) {
        if (isNaN(value[i]) == true) {
            console.log('no tiene numeros');
            flag += 1;
        } else {
            console.log('tiene numeros');

        }
    }
    if (value.length < minLength || flag > 0) {
        console.log('Numero invalido invalido');
        return false;
    } else {
        console.log('numero valido valido, value.length: '+ value.length);
        return true;
    }
}

// Limpia el input si esta incorrecto
function inputClear(flag){
    console.log('bandera del limpiador:' +flag);
    if (flag == false){
        console.log('limpiar el input');
        return true
    }
}
