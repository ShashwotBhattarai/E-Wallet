var count = 0;
var showPassword = function () {
    document.getElementById("password").type = "text";
    document.getElementById("rePassword").type = "text";

}

var hidePassword = function () {
    document.getElementById("password").type = "password";
    document.getElementById("rePassword").type = "password";

}

var clickCounter = function () {
    count = count + 1;
    var decision = count % 2;

    if (decision == 0) {
        hidePassword();
    }
    else {
        showPassword();
    }

}

var mobileNumberValidate = function () {
    var mobileNumberInput = document.getElementById("mobileNumberInput").value
    if (mobileNumberInput.length == 10) {
        document.getElementById("mobileNumberInput").focus();
        return true;
    }
    else {
        document.getElementById("alertArea").style.color = "white";
        document.getElementById("alertArea").innerHTML = "You have entered an invalid mobile number!";
        document.getElementById("MobileNumberInput").focus();
        return false;
    }
}

var passwordValidate = function () {
    var passwordValue = document.getElementById("password").value;
    var rePasswordValue = document.getElementById("rePassword").value;
    if (passwordValue === rePasswordValue) {
        return true;
    }
    else {

        document.getElementById("alertArea").style.color = "white";
        document.getElementById("alertArea").innerHTML = "Passwords don't match";
        document.getElementById("password").focus();
        document.getElementById("rePassword").focus();
        return false;
    }

}

var saveDataInLocalStorage = function () {
    if (typeof (Storage) !== "undefined") {

        var fullName = document.getElementById("fullNameInput").value;
        var mobileNumber = document.getElementById("mobileNumberInput").value;
        var password = document.getElementById("password").value;

        var userInfo =
        {
            FullName: fullName,
            MobileNumber: mobileNumber,
            Password: password,
            TotalBalance: 1000
        }


        localStorage.setItem(document.getElementById("mobileNumberInput").value, JSON.stringify(userInfo));

    }
    else {
        document.getElementById("alertArea").style.color = "white";
        document.getElementById("alertArea").innerHTML = "Your browser doesn't support local storage";
    }
}

var formValidate = function () {
    if (mobileNumberValidate() && passwordValidate()) {
        document.getElementById("alertArea").style.color = "white";
        document.getElementById("alertArea").innerHTML = "SignUp Successfull";
        saveDataInLocalStorage();
        window.location.replace("Login.html");
    }
}


window.onload = function () {

    var showButton = document.getElementById("showButton");
    showButton.addEventListener("click", clickCounter);

    var signUpButton = document.getElementById("signUpButton");

    signUpButton.addEventListener("click", formValidate);

}
