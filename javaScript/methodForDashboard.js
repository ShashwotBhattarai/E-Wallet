var displayUserName = function () {
    var currentUserInfo = localStorage.getItem("currentUserInfo");
    var parsedObject = JSON.parse(currentUserInfo);
    var userNameSpace = document.getElementById("userNameSpace");
    userNameSpace.innerHTML = parsedObject.FullName;
}

var displayTotalBalnace = function () {
    var currentUserInfoSerilized = localStorage.getItem("currentUserInfo");
    var currentUserInfoQuantized = JSON.parse(currentUserInfoSerilized);

    var keyForOriginalObject= currentUserInfoQuantized.MobileNumber;

    var originalUserInfoSerilized=localStorage.getItem(keyForOriginalObject);
    var originalUserInfoQuantized=JSON.parse(originalUserInfoSerilized);
    
    var currentBalance = document.getElementById("currentBalance");
    currentBalance.innerHTML = originalUserInfoQuantized.TotalBalance;

}
var methodForSignOut=function(){
    localStorage.removeItem("currentUserInfo");
    window.location.replace("FirstPage.html");
    
}

window.onload = function () {

    displayUserName();
    displayTotalBalnace();

    var signOutButton=document.getElementById("signOutButton");
    signOutButton.addEventListener("click",methodForSignOut);

}