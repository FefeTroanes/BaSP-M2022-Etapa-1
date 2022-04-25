//HTML Objects
var littleName = document.getElementById('name');
var littleNameOutput = document.getElementById('name-output')
var lastname = document.getElementById('lastname');
var lastnameOutput = document.getElementById('lastname-output')
var dni = document.getElementById('dni');
var dniOutput = document.getElementById('dni-output');
var birthDate = document.getElementById('birthDate');
var birthDateOutput = document.getElementById('birthDate-output');
var telephone = document.getElementById('telephone');
var telephoneOutput = document.getElementById('telephone-output');
var address = document.getElementById('address');
var addressOutput = document.getElementById('address-output');
var city = document.getElementById('city');
var cityOutput = document.getElementById('city-output');
var postalCode = document.getElementById('postalCode');
var postalCodeOutput = document.getElementById('postalCode-output');
var email = document.getElementById('email');
var emailOutput = document.getElementById('email-output');
var password1 = document.getElementById('password1');
var password1Output = document.getElementById('password1-output');
var password2 = document.getElementById('password2');
var password2Output = document.getElementById('password2-output');
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
password1.addEventListener('blur', verifyPassword1);
password1.addEventListener('focus', password1Clear);
password2.addEventListener('blur', verifyPassword2);
password2.addEventListener('focus', password2Clear);

// Valida el nombre => Solo letras y debe tener más de 3 letras
function verifyName(e){
    console.log(e.target.value);
    inputValue = e.target.value;
    if (verifyLetter(inputValue, 3) == false) {
        littleNameValid = false;
        outputError(littleName, littleNameOutput, 'name');
        return console.log('bandera de nombre mal: '+ littleNameValid);
    } else {
        littleNameValid = true;
        outputOk(littleName, littleNameOutput, 'name');
        return console.log('bandera del nombre bien: ' + littleNameValid);
    }
}
// Limpia el nombre si esta mal
function littleNameClear(e) {
    if (inputClear(littleNameValid)){
        e.target.value = "";
        outputClear(littleName, littleNameOutput);
    }
}

//Valida el apellido => Solo letras y debe tener más de 3 letras.
function verifyLastname(e){
    inputValue = e.target.value;
    if (verifyLetter(inputValue, 3) == false) {
        lastNameValid = false;
        outputError(lastname, lastnameOutput, 'lastname');
        return console.log('bandera del apellido mal: '+ lastNameValid);
    } else {
        lastNameValid = true;
        outputOk(lastname, lastnameOutput, 'lastname');
        return console.log('bandera del apellido bien: ' + lastNameValid);
    }
}
// Limpia el apellido si esta mal
function lastnameClear(e) {
    if (inputClear(lastNameValid)){
        e.target.value = "";
        outputClear(lastname, lastnameOutput);
    }
}

// Valida el dni => Solo número y debe tener más de 7 números
function verifyDNI(e){
    console.log(e.target.value);
    inputValue = e.target.value;
    if (verifyNumber(inputValue, 7) == false) {
        console.log('bandera del dni mal');
        outputError(dni, dniOutput, 'dni');
        return dniValid = false;
    } else {
        console.log('bandera del dni bien');
        outputOk(dni, dniOutput, 'dni');
        return dniValid = true;
    }
}
// Limipia el dni si esta mal
function dniClear(e){
    if (inputClear(dniValid)){
        e.target.value = "";
        outputClear(dni, dniOutput);
    }
}

//Valida la fecha de nacimiento => Con formato dd/mm/aaaa
function verifyBirthdate(e){
    inputValue = e.target.value;
    if (verifyNumber(inputValue, 8) == false) {
        console.log('bandera del cumpleanios mal');

        outputError(birthDate, birthDateOutput, 'birthdate');
        return birthdayValid = false;
    } else {
        console.log('bandera del cumpleanios bien');
        outputOk(birthDate, birthDateOutput, 'birthdate');
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
        outputClear(birthDate, birthDateOutput);
    }
}

//Valida el telefono => Solo número y debe tener 10 números
function verifyTelephone(e){
    inputValue = e.target.value;
    if (verifyNumber(inputValue, 10) == false) {
        console.log('bandera del telefono mal');
        outputError(telephone, telephoneOutput, 'telephone');
        return telephoneValid = false;
    } else {
        console.log('bandera del telefono bien');
        outputOk(telephone, telephoneOutput, 'telephone');
        return telephoneValid = true;
    }
}
//Limpia el telefono si esta mal
function telephoneClear(e){
    if (inputClear(telephoneValid)){
        e.target.value = "";
        outputClear(telephone, telephoneOutput);
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
        outputOk(address, addressOutput, 'address');
    } else {
        console.log('Direccion invalida: ' + addressValid);
        outputError(address, addressOutput, 'address');
    }
}
// Limpia la direccion si esta mal
function addressClear(e){
    if (inputClear(addressValid)){
        e.target.value = "";
        outputClear(address, addressOutput);
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
        outputOk(city, cityOutput, 'city');
        console.log('ciudad valida ' + cityValid);
    } else {
        console.log('ciudad invalida');
        outputError(city, cityOutput, 'city');
    }
}
// Limpia la ciudad si esta mal
function cityClear(e){
    if (inputClear(cityValid)){
        e.target.value = "";
        outputClear(city, cityOutput);
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
        outputOk(postalCode, postalCodeOutput, 'postal code');
        return postalCodeValid = true;
    } else {
        console.log('codigo postal invalido, value.length: ' + inputValue.length);
        outputError(postalCode, postalCodeOutput, 'postal code');
        return postalCodeValid = false;
    }
}
// Limpia el CP si esta mal
function postalCodeClear(e){
    if (inputClear(postalCodeValid)){
        e.target.value = "";
        outputClear(postalCode, postalCodeOutput);
    }
}

// Valida el email => Debe tener un formato de email válido
function verifySignupEmail(e) {
    if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.target.value)) {
        console.log('email valido');
        outputOk(email, emailOutput, 'email');
        return emailSignupValid = true;
    } else {
        console.log('email invalido');
        outputError(email, emailOutput, 'email');
        return emailSignupValid = false;
    }
}
// Limpia el email si esta mal
function emailSignupClear(e){
    if (emailSignupValid == false) {
        e.target.value = "";
        outputClear(email, emailOutput);
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
        outputOk(password1, password1Output, 'password');
        password1Copy = inputValue;
    } else {
        console.log('Password invalida: ' + password1Valid);
        outputError(password1, password1Output, 'password');
    }
}
// Limpia la contraseña si esta mal
function password1Clear(e){
    if (inputClear(password1Valid)){
        e.target.value = "";
        outputClear(password1, password1Output);
    }
}

//Valida la confirmacion de la contraseña
function verifyPassword2(e) {
    inputValue = e.target.value;
    if (inputValue === password1Copy) {
        password2Valid = password1Valid;
        console.log('es igual: ' + password2Valid);
        outputOk(password2, password2Output, 'password');
    } else {
        console.log('es distinta');
        outputError(password2, password2Output, 'password');
    }
}
//Limpia la confirmacion de la contraseña si esta mal
function password2Clear(e) {
    if (inputClear(password2Valid)){
        e.target.value = "";
        outputClear(password2, password2Output);
    }
}

//Valida si el string tiene numeros ignorando las letras
function hasItNumbers(inputValue) {
    var numbers = '1234567890';
    for (var i = 0; i < inputValue.length; i++) {
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
    for(var i=0; i<inputValue.length; i++){
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
    for(var i=0; i<inputValue.length; i++){
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

// Muestra la caja verde y el mensaje de input valido si estan bien ingresados
function outputOk(inputBox, outputMessage, type){
    outputMessage.innerHTML = 'Valid ' + type;
    outputMessage.className = 'message-ok';
    inputBox.className = 'signup-input-ok';
}
// Muestra la caja roja y el mensaje de input invalido si estan mal ingresados
function outputError(inputBox, outputMessage, type){
    outputMessage.innerHTML = 'Invalid ' + type;
    outputMessage.className = 'message-error';
    inputBox.className = 'signup-input-error';
}
// Borra el mensaje de los inputs y el color de la caja si hay que corregirlos
function outputClear(inputBox, outputMessage){
    outputMessage.className = 'message-hidden';
    inputBox.className = 'signup-input';
}
