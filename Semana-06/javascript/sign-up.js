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

//Flags
var littleNameValid = false;
var lastNameValid = false;
var dniValid = false;
var birthdayValid = false;
var telephoneValid = false;
var postalCodeValid = false;
var emailSignupValid = false;

// Bueno ahora si send help :joy:
//     Pude validar si los strings son solo texto o solo numeros, pero no logro hacer que ande si tiene ambos. Debe haber algo que no estoy viendo

//Event listeners
littleName.addEventListener('blur', verifyName);        //Solo letras y debe tener más de 3 letras
littleName.addEventListener('focus', littleNameClear);
lastname.addEventListener('blur', verifyLastname);      //Solo letras y debe tener más de 3 letras.
lastname.addEventListener('focus',lastnameClear);
dni.addEventListener('blur', verifyDNI);                //Solo número y debe tener más de 7 números
dni.addEventListener('focus', dniClear)
birthDate.addEventListener('blur', verifyBirthdate);    //Con formato dd/mm/aaaa
birthDate.addEventListener('focus', birthdayClear);
telephone.addEventListener('blur', verifyTelephone);    //Solo número y debe tener 10 números
telephone.addEventListener('focus', telephoneClear);
// address.addEventListener('blur', verifyLetter);           //Al menos 5 caracteres con letras, números y un espacio en el medio
// city.addEventListener('blur', verifyLetter);              //Texto alfanumérico y debe tener más de 3 letras
postalCode.addEventListener('blur', verifyPostalCode);  //Solo número y debe tener entre 4 y 5 números
postalCode.addEventListener('focus', postalCodeClear);
email.addEventListener('blur', verifySignupEmail);      //Debe tener un formato de email válido
email.addEventListener('focus', emailSignupClear);
// password1.addEventListener('blur', verifyLetter);         //Al menos 8 caracteres, formados por letras y números
// password2.addEventListener('blur', verifyLetter);         //Al menos 8 caracteres, formados por letras y números

// Valida el nombre
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

//Valida el apellido
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

//Valida el telefono
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

// Valida el dni
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

//Valida la fecha de nacimiento
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


// Valida el codigo postal
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

// Valida el email
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


// Verifica si el string tiene letras
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

// Verifica si el string tiene numeros
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
