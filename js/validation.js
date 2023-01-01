var username = document.getElementById("fname")
var email = document.getElementById("femail")
var pass = document.getElementById("fpass")
var passConfirm = document.getElementById("fconfirmpass")

function isBetween(n, min, max) {
    if (n < max && n > min) {
        return true
    }
    return false
}

function isRegexValid(regex, value) {

    console.log(regex)
    return regex.test(value)

}


function showError(input, message) {
    const parentDiv = input.parentElement
    parentDiv.classList.remove("success")
    parentDiv.classList.add("error")

    const error = parentDiv.querySelector('span');
    error.textContent = message
}

function showSuccess(input) {

    const parentDiv = input.parentElement
    parentDiv.classList.remove("error")
    parentDiv.classList.add("success")

    const error = parentDiv.querySelector('span');
    error.textContent = ""

}


function onSignIn() {

    var isValid = true

    if (!isBetween(username.value.length, 3, 25)) {

        showError(username, "Must be between 3 and 25 characters")
        isValid = false

    } else {
        showSuccess(username)
    }

    if (!isRegexValid(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, email.value)) {

        showError(email, "Invalid email, please enter a correct one")
        isValid = false

    } else {
        showSuccess(email)
    }

    if (!(isRegexValid(/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/, pass.value))) {

        showError(pass, "Password must be at least 8 characters long, must contain an uppercase, lowercase and a special character")
        isValid = false

    } else {
        showSuccess(pass)
    }

    if ( pass.value !== passConfirm.value) {
        showError(passConfirm, "Must be the same as password")
        isValid = false
    } else if (passConfirm.value === "") {
        showError(passConfirm, "This field is required")
    } else {
        showSuccess(passConfirm)
    }

    if (isValid){
        window.location.href="../homepage/homepage.html"
    }
}