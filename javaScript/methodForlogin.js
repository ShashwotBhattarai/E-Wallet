
var count = 0;
var showPassword = function () {
    document.getElementById("password").type = "text";
}

var hidePassword = function () {
    document.getElementById("password").type = "password";
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

var memberVerification = function ()
 {
    var mobileNumberInput = document.getElementById("mobileNumberInput").value;
    var passwordInput = document.getElementById("password").value;
    
    if (localStorage.getItem(mobileNumberInput) === null){
        document.getElementById("alertArea").style.color="white";
        document.getElementById("alertArea").innerHTML="Invalid User";
        

    }
    else{

        
        
        var savedInfo = localStorage.getItem(mobileNumberInput);
        var parsedObject = JSON.parse(savedInfo);
        var savedPassword = parsedObject.Password;
        if (passwordInput === savedPassword) 
        {   
            return true;
        }
        else 
        {   
            document.getElementById("alertArea").style.color="white";
            document.getElementById("alertArea").innerHTML="Password Incorrect";
            return false;
        }
    }


}

var loginMethod = function () {
    if (memberVerification()) {
        document.getElementById("alertArea").style.color = "white";
        document.getElementById("alertArea").innerHTML = "Welcome Back";
        var mobileNumberInput = document.getElementById("mobileNumberInput").value;
        var savedInfo = localStorage.getItem(mobileNumberInput);
        var parsedObject = JSON.parse(savedInfo);
        var currentUserInfo =
        {
            FullName: parsedObject.FullName,
            MobileNumber: parsedObject.MobileNumber,
            Password: parsedObject.Password,
            TotalBalance: parsedObject.TotalBalance
        }
        localStorage.setItem("currentUserInfo", JSON.stringify(currentUserInfo));
        window.location.replace("Dashboard.html");
    }
}

window.onload = function () {
    var showButton = document.getElementById("showButton");
    var loginButton = document.getElementById("loginButton");
    showButton.addEventListener("click", clickCounter);
    loginButton.addEventListener("click", loginMethod);
}