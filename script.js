function generatePassword() {
    //TODO: your code goes here



    var lowerPar = confirm("Do you want your password to contain lowercase letters?")
    var upperPar = confirm("Do you want your password to contain uppercase letters?")
    var symbolPar = confirm("Do you want your password to contain symbols?")
    var numberPar = confirm("Do you want your password to contain numbers?")
    var params = []
    var length = passwordLength()
    var passwordHold = []

    var password = passwordHold



    if (lowerPar) {
        params.push(getRandomlower)
    }
    if (upperPar) {
        params.push(getRandomupper)
    }
    if (symbolPar) {
        params.push(getRandomsymbol)
    }
    if (numberPar) {
        params.push(getRandomnumber)
    }

    function passwordLength() {

        pLength = prompt("How long is your password", "Type a number between 8-128")
        return +pLength
    }

    function getRandomlower() {

        var randomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

        return randomLower[Math.floor(Math.random() * randomLower.length)]
    }

    function getRandomupper() {

        var randomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

        return randomUpper[Math.floor(Math.random() * randomUpper.length)]
    }

    function getRandomsymbol() {

        var randomSymbol = ["!", "@", "#", "%", "$", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", "."]

        return randomSymbol[Math.floor(Math.random() * randomSymbol.length)]
    }
    function getRandomnumber() {

        var randomNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

        return randomNumber[Math.floor(Math.random() * randomNumber.length)]
    }

    function passPar(pLength) {

        for (var i = 0; i < pLength; i++) {

            passwordHold.push(params[Math.floor(Math.random() * params.length)]())


        }


    }


    // console.log(passwordHold)
    passPar(length)
    return password

}


// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);