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

//Modal messages
var modalTittle = document.getElementById('modal-header');
var littleNameModalText = document.getElementById('littlename-modal-text');
var lastnameModalText = document.getElementById('lastname-modal-text');
var dniModalText = document.getElementById('dni-modal-text');
var birthdateModalText = document.getElementById('dni-modal-text');
var telephoneModalText = document.getElementById('telephone-modal-text');
var addressModalText = document.getElementById('address-modal-text');
var cityModalText = document.getElementById('city-modal-text');
var postalCodeModalText = document.getElementById('postalCode-modal-text');
var emailModalText = document.getElementById('email-modal-text');
var password1ModalText = document.getElementById('password1-modal-text');
var password2ModalText = document.getElementById('password2-modal-text');
var modalBody = document.getElementById('modal-main-body');


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
var errorsArray = [];

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
    inputValue = e.target.value;
    if (verifyLetter(inputValue, 3) == false) {
        littleNameValid = false;
        outputError(littleName, littleNameOutput, 'name');
    } else {
        littleNameValid = true;
        outputOk(littleName, littleNameOutput, 'name');
    }
}
// Limpia el nombre si esta mal
function littleNameClear(e) {
    if (inputClear(littleNameValid)){
        // e.target.value = "";
        outputClear(littleName, littleNameOutput);
    }
}

//Valida el apellido => Solo letras y debe tener más de 3 letras.
function verifyLastname(e){
    inputValue = e.target.value;
    if (verifyLetter(inputValue, 3) == false) {
        lastNameValid = false;
        outputError(lastname, lastnameOutput, 'lastname');
    } else {
        lastNameValid = true;
        outputOk(lastname, lastnameOutput, 'lastname');
    }
}
// Limpia el apellido si esta mal
function lastnameClear(e) {
    if (inputClear(lastNameValid)){
        // e.target.value = "";
        outputClear(lastname, lastnameOutput);
    }
}

// Valida el dni => Solo número y debe tener más de 7 números
function verifyDNI(e){
    inputValue = e.target.value;
    if (inputValue.length >= 7 && inputValue.length <= 8) {
        if (verifyNumber(inputValue, 7) == false) {
            outputError(dni, dniOutput, 'dni');
            return dniValid = false;
        } else {
            outputOk(dni, dniOutput, 'dni');
            return dniValid = true;
        }
    } else {
        dniOutput.innerHTML = 'DNI must have between 7 and 8 numbers';
        dniOutput.className = 'message-error';
        dni.className = 'signup-input-error';
    }

}
// Limipia el dni si esta mal
function dniClear(e){
    if (inputClear(dniValid)){
        // e.target.value = "";
        outputClear(dni, dniOutput);
    }
}

//Valida la fecha de nacimiento => Con formato mm/dd/aaaa
function verifyBirthdate(e){
    inputValue = e.target.value;
    if (verifyNumber(inputValue, 8) == false) {
        outputError(birthDate, birthDateOutput, 'birthdate');
        return birthdayValid = false;
    } else {
        var month = inputValue.substring(0,2);
        var day = inputValue.substring(2,4);
        var year = inputValue.substring(4);
        if ((day > 0 && day < 32) && (month > 0 && month < 13) && (year > 1900 && year < 2004)){
            outputOk(birthDate, birthDateOutput, 'birthdate');
            e.target.value = month + '/' + day + '/' + year;
            return birthdayValid = true;
        } else {
            outputError(birthDate, birthDateOutput, 'birthdate');
            return birthdayValid = false;
        }
    }
}
//Limpia la fecha si esta mal
function birthdayClear(e){
    if (inputClear(birthdayValid)){
        // e.target.value = "";
        outputClear(birthDate, birthDateOutput);
    }
}

//Valida el telefono => Solo número y debe tener 10 números
function verifyTelephone(e){
    inputValue = e.target.value;
    if (inputValue.length == 10){
        if (verifyNumber(inputValue, 10) == false) {
            outputError(telephone, telephoneOutput, 'telephone');
            return telephoneValid = false;
        } else {
            outputOk(telephone, telephoneOutput, 'telephone');
            return telephoneValid = true;
        }
    } else {
        telephoneOutput.innerHTML = 'Phone must have 10 numbers';
        telephoneOutput.className = 'message-error';
        telephone.className = 'signup-input-error';
    }

}
//Limpia el telefono si esta mal
function telephoneClear(e){
    if (inputClear(telephoneValid)){
        // e.target.value = "";
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
    if (hasItLetters(inputValue)){
        addressLettersFlag = true;
    }
    if (blankSpaceIndex > 0 && blankSpaceIndex < (inputValue.length - 1)){
        addressSpaceFlag = true;
    } else {
    }
    if (addressNumbersFlag == true && addressNumbersFlag == true && addressSpaceFlag == true){
        addressValid = true;
        outputOk(address, addressOutput, 'address');
    } else {
        outputError(address, addressOutput, 'address');
    }
}
// Limpia la direccion si esta mal
function addressClear(e){
    if (inputClear(addressValid)){
        // e.target.value = "";
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
        anythingElseThanANumberOrALetter = false;
    }
    if (inputValueLength > 3){
        inputValueLengthFlag = true;
    }
    if (inputValueLengthFlag == true && anythingElseThanANumberOrALetter == true){
        cityValid = true;
        outputOk(city, cityOutput, 'city');
    } else {
        outputError(city, cityOutput, 'city');
    }
}
// Limpia la ciudad si esta mal
function cityClear(e){
    if (inputClear(cityValid)){
        // e.target.value = "";
        outputClear(city, cityOutput);
    }
}

// Valida el codigo postal => Solo números y debe tener entre 4 y 5 números
function verifyPostalCode(e) {
    var flag = 0;
    inputValue = e.target.value;
    for (var i = 0; i < inputValue.length; i++) {
        if (isNaN(inputValue[i]) == true) {
            flag += 1;
        }
    }
    if ((inputValue.length == 4 || inputValue.length == 5) && flag == 0) {
        outputOk(postalCode, postalCodeOutput, 'postal code');
        return postalCodeValid = true;
    } else {
        outputError(postalCode, postalCodeOutput, 'postal code');
        return postalCodeValid = false;
    }
}
// Limpia el CP si esta mal
function postalCodeClear(e){
    if (inputClear(postalCodeValid)){
        // e.target.value = "";
        outputClear(postalCode, postalCodeOutput);
    }
}

// Valida el email => Debe tener un formato de email válido
function verifySignupEmail(e) {
    if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(e.target.value)) {
        outputOk(email, emailOutput, 'email');
        return emailSignupValid = true;
    } else {
        outputError(email, emailOutput, 'email');
        return emailSignupValid = false;
    }
}
// Limpia el email si esta mal
function emailSignupClear(e){
    if (emailSignupValid == false) {
        // e.target.value = "";
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
    if (hasItLetters(inputValue)){
        passwordLettersFlag = true;
    }
    if (inputValue.length > 0) {
        emptyString = false;
    }
    if (passwordNumbersFlag == true && passwordLettersFlag == true && emptyString == false){
        password1Valid = true;
        outputOk(password1, password1Output, 'password');
        password1Copy = inputValue;
    } else {
        outputError(password1, password1Output, 'password');
    }
}
// Limpia la contraseña si esta mal
function password1Clear(e){
    if (inputClear(password1Valid)){
        // e.target.value = "";
        outputClear(password1, password1Output);
    }
}

//Valida la confirmacion de la contraseña
function verifyPassword2(e) {
    inputValue = e.target.value;
    if (inputValue === password1Copy) {
        password2Valid = password1Valid;
        outputOk(password2, password2Output, 'password');
    } else {
        outputError(password2, password2Output, 'password');
    }
}
//Limpia la confirmacion de la contraseña si esta mal
function password2Clear(e) {
    if (inputClear(password2Valid)){
        // e.target.value = "";
        outputClear(password2, password2Output);
    }
}

//Valida si el string tiene numeros ignorando las letras
function hasItNumbers(inputValue) {
    var numbers = '1234567890';
    for (var i = 0; i < inputValue.length; i++) {
        if (numbers.indexOf(inputValue.charAt(i), 0) != -1) {
            return true;
        } else {
        }
    }
}

//Valida si el string tiene letras ignorando los numeros
function hasItLetters(inputValue){
    var letters = 'abcdefghyjklmnñopqrstuvwxyz'
    for(var i=0; i<inputValue.length; i++){
        if (letters.indexOf(inputValue.charAt(i),0)!=-1){
            return true;
        } else {
        }
    }
}

//Valida que el string no tenga otra cosa que no sean numeros o letras
function hasNumbersOrLetters(inputValue){
    var numbersAndLetters='abcdefghyjklmnñopqrstuvwxyz0123456789';
    for(var i=0; i<inputValue.length; i++){
        if (numbersAndLetters.indexOf(inputValue.charAt(i),0)==-1){
            return false;
        } else {
            return true;
        }
    }
}

// Verifica si el string SOLO tiene letras
function verifyLetter(value, minLength) {
    var flag = 0;
    for (var i = 0; i < value.length; i++) {
        if (isNaN(value[i]) == true) {
        } else {
            flag += 1;
        }
    }
    if (value.length < minLength || flag > 0) {
        return false;
    } else {
        return true;
    }
}

// Verifica si el string SOLO tiene numeros
function verifyNumber(value, minLength){
    var flag = 0;
    for (var i = 0; i < value.length; i++) {
        if (isNaN(value[i]) == true) {
            flag += 1;
        }
    }
    if (value.length < minLength || flag > 0) {
        return false;
    } else {
        return true;
    }
}

// Limpia el input si esta incorrecto
function inputClear(flag){
    if (flag == false){
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

// Verifica que no este el campo vacio
function outputRequired(inputBox, outputMessage){
    outputMessage.innerHTML = 'This field is required';
    outputMessage.className = 'message-error';
    inputBox.className = 'signup-input-error';
}

// //////////////MODAL//////////////////
var modal = document.getElementById("myModal");
var btn = document.getElementById("createBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(e) {
    e.preventDefault();

    if (littleName.value.length == 0){
        outputRequired(littleName, littleNameOutput);
    } else if (lastname.value.length == 0){
        outputRequired(lastname, lastnameOutput);
    } else if (dni.value.length == 0){
        outputRequired(dni, dniOutput);
    } else if (birthDate.value.length == 0){
        outputRequired(birthDate, birthDateOutput);
    } else if (telephone.value.length == 0){
        outputRequired(telephone, telephoneOutput);
    } else if (address.value.length == 0){
        outputRequired(address, addressOutput);
    } else if (city.value.length == 0){
        outputRequired(city, cityOutput);
    } else if (postalCode.value.length == 0){
        outputRequired(postalCode, postalCodeOutput);
    } else if (email.value.length == 0){
        outputRequired(email, emailOutput);
    } else if (password1.value.length == 0){
        outputRequired(password1, password1Output);
    } else if (password2.value.length == 0){
        outputRequired(password2, password2Output);
    } else {
        // modal.style.display = "block";
        modal.className = "modal-display-block";
        if (littleNameValid == false){
            modalTittle.textContent = 'Sign up failed';
            littleNameModalText.textContent = 'Name: ' + littleName.value + ' not valid';
        } else if (lastNameValid == false) {
            modalTittle.textContent = 'Sign up failed';
            lastnameModalText.textContent = 'Lastname: ' + lastname.value + ' not valid';
        } else if (dniValid == false) {
            modalTittle.textContent = 'Sign up failed';
            dniModalText.textContent = 'DNI: ' + dni.value + ' not valid';
        } else if (birthdayValid == false) {
            modalTittle.textContent = 'Sign up failed';
            birthdateModalText.textContent = 'Birthdate: ' + birthDate.value + ' not valid';
        } else if (telephoneValid == false) {
            modalTittle.textContent = 'Sign up failed';
            telephoneModalText.textContent = 'Telephone: ' + telephone.value + ' not valid';
        } else if (addressValid == false) {
            modalTittle.textContent = 'Sign up failed';
            addressModalText.textContent = 'Address: ' + address.value + ' not valid';
        } else if (cityValid == false) {
            modalTittle.textContent = 'Sign up failed';
            cityModalText.textContent = 'City: ' + city.value + ' not valid';
        } else if (postalCodeValid == false) {
            modalTittle.textContent = 'Sign up failed';
            postalCodeModalText.textContent = 'Postalcode: ' + postalCode.value + ' not valid';
        } else if (emailSignupValid == false) {
            modalTittle.textContent = 'Sign up failed';
            emailModalText.textContent = 'Email: ' + email.value + ' not valid';
        } else if (password1Valid == false) {
            modalTittle.textContent = 'Sign up failed';
            password1ModalText.textContent = 'Password: ' + password1.value + ' not valid';
        } else if (password2Valid == false) {
            modalTittle.textContent = 'Sign up failed';
            password2ModalText.textContent = 'Password confirmation: ' + password2.value + ' not valid';
        } else {
            fetch("https://basp-m2022-api-rest-server.herokuapp.com/signup".concat("?name=", littleName.value,
                "&lastName=", lastname.value,
                "&dni=", dni.value,
                "&dob=", birthDate.value,
                "&phone=", telephone.value,
                "&address=", address.value,
                "&city=", city.value,
                "&zip=", postalCode.value,
                "&email=", email.value,
                "&password=", password1.value))
                .then(response => response.json())
                .then(data => {
                    if (data.success){
                        console.log('data: ', data);
                        console.log('data.message: ',data.msg)
                        modalTittle.textContent = data.msg;
                        littleNameModalText.textContent = 'Name: ' + data.data.name;
                        lastnameModalText.textContent = 'Lastname: ' + data.data.lastName;
                        dniModalText.textContent = 'DNI: ' + data.data.dni;
                        birthdateModalText.textContent = 'Birthdate: ' + data.data.dob;
                        telephoneModalText.textContent = 'Telephone: ' + data.data.phone;
                        addressModalText.textContent = 'Address: ' + data.data.address;
                        cityModalText.textContent = 'City: ' + data.data.city;
                        postalCodeModalText.textContent = 'Postalcode: ' + data.data.zip;
                        emailModalText.textContent = 'Email: ' + data.data.email;
                        password1ModalText.textContent = 'Password: ' + data.data.password;
                        //Local storage
                        localStorage.setItem('name',data.data.name);
                        localStorage.setItem('lastname',data.data.lastName);
                        localStorage.setItem('dni',data.data.dni);
                        localStorage.setItem('dob',data.data.dob);
                        localStorage.setItem('phone',data.data.phone);
                        localStorage.setItem('address',data.data.address);
                        localStorage.setItem('city',data.data.city);
                        localStorage.setItem('zip',data.data.zip);
                        localStorage.setItem('email',data.data.email);
                        localStorage.setItem('password',data.data.password);
                    } else {
                        throw data;
                    } })
                .catch(error => {
                    modalTittle.textContent = 'Signup failed';
                    console.log('error: ',error);
                    console.log('errors.lenght: ' + error.errors.length)
                    for (var i = 0; i < error.errors.length; i++) {
                        errorsArray.push(error.errors[i].msg)
                        console.log(error.errors[i].msg);
                    }
                    console.log('ErrorsArray: ' + errorsArray);
                    for (var i = 0; i < errorsArray.length; i++){
                        modalBody.innerHTML = errorsArray[i];
                    }
                })
        }
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    // modal.style.display = "none";
    modal.className = 'modal-display-none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        // modal.style.display = "none";
        modal.className = 'modal-display-none';
        errorsArray = [];
        modalBody.textContent = '';
    }
}

window.onload = function () {
    littleName.value = localStorage.getItem('name');
    lastname.value = localStorage.getItem('lastname');
    dni.value = localStorage.getItem('dni');
    birthDate.value = localStorage.getItem('dob');
    telephone.value = localStorage.getItem('phone');
    address.value = localStorage.getItem('address');
    city.value = localStorage.getItem('city');
    postalCode.value = localStorage.getItem('zip');
    email.value = localStorage.getItem('email');
    password1.value = localStorage.getItem('password');
    password2.value = localStorage.getItem('password');

    if (localStorage.getItem('name') !== null) {
        littleNameValid = true;
        lastNameValid = true;
        dniValid = true;
        birthdayValid = true;
        telephoneValid = true;
        addressValid = true;
        cityValid = true;
        postalCodeValid = true;
        emailSignupValid = true;
        password1Valid = true;
        password2Valid = true;
    }
}