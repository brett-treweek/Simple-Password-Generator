// Password length
var range = document.getElementById("range");

range.addEventListener("input", (e) => {
    var value = +e.target.value
    var label = e.target.nextElementSibling
    label.innerHTML = value
})

// var for yes buttons and initiate
var initiate = document.getElementById("initiate");
var yesUpper = document.getElementById("yesUCase");
var yesLower = document.getElementById("yesLCase");
var yesNumbers = document.getElementById("yesNumbers");
var yesSymbols = document.getElementById("yesSymbols");

// var for no buttons and submit
var submit = document.getElementById("submit");
var noUpper = document.getElementById("noUCase");
var noLower = document.getElementById("noLCase");
var noNumber = document.getElementById("noNumbers");
var noSymbol = document.getElementById("noSymbols");

// var for hidden divs
var upperDiv = document.getElementById("upperDiv");
var lowerDiv = document.getElementById("lowerDiv");
var numDiv = document.getElementById("numDiv");
var symDiv = document.getElementById("symDiv");
var passLength = document.getElementById("passLength");

// Initiate play icon function, clear checkboxes, hide play icon
initiate.addEventListener("click", go);

function go(e) {
    upperDiv.style.display = "block";
    initiate.style.display = "none";
    pSymbol.checked = false;
    pNumber.checked = false;
    lowerCase.checked = false;
    upperCase.checked = false;
    card.style.opacity = "0";
}

// Uppercase yes function
yesUpper.addEventListener("click", go2);

function go2(e) {
    lowerDiv.style.display = "block";
    upperDiv.style.display = "none";
    upperCase.checked = "checked";
}

// Uppercase no function
noUpper.addEventListener("click", go3);

function go3(e) {
    lowerDiv.style.display = "block";
    upperDiv.style.display = "none";
}

// Lowercase yes function
yesLower.addEventListener("click", go4);

function go4(e) {
    numDiv.style.display = "block";
    lowerDiv.style.display = "none";
    lowerCase.checked = "checked";
}

// Lowercase no function
noLower.addEventListener("click", go5);

function go5(e) {
    numDiv.style.display = "block";
    lowerDiv.style.display = "none";
}

// Numbers yes function
yesNumbers.addEventListener("click", go6);

function go6(e) {
    numDiv.style.display = "none";
    symDiv.style.display = "block";
    pNumber.checked = "checked";
}

// Numbers no function
noNumbers.addEventListener("click", go7);

function go7(e) {
    numDiv.style.display = "none";
    symDiv.style.display = "block";
}

// Symbols yes functon
yesSymbols.addEventListener("click", go8);

function go8(e) {
    symDiv.style.display = "none";
    passLength.style.display = "block";
    pSymbol.checked = "checked";
}

// Symbols no function
noSymbols.addEventListener("click", go9);

function go9(e) {
    symDiv.style.display = "none";
    passLength.style.display = "block";
}

// Submit button function
submit.addEventListener("click", go10);
    
function go10(e) {
    passLength.style.display = "none";
    initiate.style.display = "block";
    card.style.opacity = "1"
}

// Generate password var
var empty = "";
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "!'#&($)*+%,-./:;<=>?@]^[_`{|}~";

var pLength = document.getElementById("range");
var upperCase = document.getElementById("p-uppercase");
var lowerCase = document.getElementById("p-lowercase");
var pNumber = document.getElementById("p-number");
var pSymbol = document.getElementById("p-symbol");
var submit = document.getElementById("submit");
var password = document.getElementById("password");

// Generate password function
submit.addEventListener("click", () => {
    let initialPassword = empty;
    (upperCase.checked) ? initialPassword += uCase : "";
    (lowerCase.checked) ? initialPassword += lCase : "";
    (pNumber.checked) ? initialPassword += number : "";
    (pSymbol.checked) ? initialPassword += symbol : "";
 
    password.value = generatePassword(pLength.value,
    initialPassword)
 });

 function generatePassword(p, initialPassword) {
    let pass = "";
    for (let i = 0; i < p; i++) {
        pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }
    return pass;
}

// Copy password to clipboard and give alert confirmation
var copy = document.getElementById("copy");

copy.addEventListener("click", () => {
    if (password.value == "") {
        alert("Please generate a password")
    } else {
        password.select();
        document.execCommand("copy");
        alert("Password has been copied to clipboard");
    }
});