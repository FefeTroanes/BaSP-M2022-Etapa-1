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

// var littleNameFlag = 0;
// var lastNameFlag = false;
// var dniFlag = false;
// var birthDateFlag = false;
// var telephoneFlag = false;
// var addressFlag = false;
// var cityFlag = false;
// var postalCodeFlag = false;
// var emailFlag = false;
// var password1Flag = false;
// var password2Flag = false;

var littleNameValid = false;
var dniValid = false;

littleName.addEventListener('blur', verifyName);  //Solo letras y debe tener más de 3 letras
littleName.addEventListener('focus', littleNameClear);
// lastname.addEventListener('blur', verifyLetter);    //Solo letras y debe tener más de 3 letras.
dni.addEventListener('blur', verifyDNI);         //Solo número y debe tener más de 7 números
// birthDate.addEventListener('blur', verifyLetter);   //Con formato dd/mm/aaaa
// telephone.addEventListener('blur', verifyLetter);   //Solo número y debe tener 10 números
// address.addEventListener('blur', verifyLetter);     //Al menos 5 caracteres con letras, números y un espacio en el medio
// city.addEventListener('blur', verifyLetter);        //Texto alfanumérico y debe tener más de 3 letras
// postalCode.addEventListener('blur', verifyLetter);  //Solo número y debe tener entre 4 y 5 números
// email.addEventListener('blur', verifyLetter);       //Debe tener un formato de email válido
// password1.addEventListener('blur', verifyLetter);   //Al menos 8 caracteres, formados por letras y números
// password2.addEventListener('blur', verifyLetter);   //Al menos 8 caracteres, formados por letras y números

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

function littleNameClear(e) {
    if (inputClear(littleNameValid)){
        e.target.value = "";
    }
}

    // inputValue = e.target.value;
    // console.log('focus value: ' + inputValue);
    // console.log('little name valid:' + littleNameValid);
    // if (littleNameValid == false){
    //     console.log('limpiar el input');
    //     e.target.value = "";
    // }

// Limpia el input si esta incorrecto
function inputClear(flag){
    // inputValue = e.target.value;
    // console.log('focus value: ' + inputValue);
    // console.log('little name valid:' + littleNameValid);
    // if (littleNameValid == false){
    //     console.log('limpiar el input');
    //     e.target.value = "";
    // }
    console.log('bandera del limpiador:' +flag);
    if (flag == false){
        console.log('limpiar el input');
        return true
        //     e.target.value = "";
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
// ORIGINAL
// function verifyLetter(e, minLength) {
//     console.log(e.target.value);
//     inputValue = e.target.value;
//     for (var i = 0; i < inputValue.length; i++) {
//         if (isNaN(inputValue[i]) == true) {
//             console.log('tiene letras');
//             // littleNameFlag = true;
//         } else {
//             console.log('no tiene letras');
//             littleNameFlag += 1;
//         }
//     }
//     if (inputValue.length < 3 || littleNameFlag > 0) {
//         littleNameValid = false
//         console.log('Nombre invalido');
//     } else {
//         littleNameValid = true;
//         console.log('nombre valido');
//     }
//     console.log('littlename flag: ' + littleNameFlag);
// }

// function littleNameClear(e){
//     inputValue = e.target.value;
//     if (littleNameValid == false){
//         inputValue = "";
//         littleNameFlag = 0;
//     }
// }

// function verifyNumber(e){
//     console.log(e.target.value);
//     inputValue = e.target.value;
//     for (var i = 0; i < inputValue.length; i++) {
//         if (isNaN(inputValue[i]) == true) {
//             console.log('no tiene numeros');
//             littleNameFlag += 1;
//         } else {
//             console.log('tiene numeros');
//         }
//     }
//     if (inputValue.length < 3 || littleNameFlag > 0) {
//         console.log('Nombre invalido');
//     } else console.log('nombre valido');
//     console.log('littlename flag: ' + littleNameFlag);
// }
//     // console.log('passwordValue: ' + passwordValue);
//     // for (var i = 0; i < e.target.value.length; i++){
//     //     if (isNaN(e.target.value[i]) == true){
//     //         console.log('tiene letras');
//     //         passwordNumberFlag = true;
//     //     } else {
//     //         console.log('no tiene letras');
//     //         passwordNumberFlag = false;
//     //     }
//     // }
