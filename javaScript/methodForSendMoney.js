var totalBalanceCalc = function (originalUserInfoQuantized) {

    var amountInput = Number(document.getElementById("amountInput").value);
    var totalBalance = Number(originalUserInfoQuantized.TotalBalance)-amountInput;



    return totalBalance;

}

var methodForSendMoney = function () {


    var currentUserInfoSerialized = localStorage.getItem("currentUserInfo");
    var currentUserInfoQuantized = JSON.parse(currentUserInfoSerialized);
    var keyForOriginalObject = currentUserInfoQuantized.MobileNumber;

    var originalUserInfoSerialized = localStorage.getItem(keyForOriginalObject);
    var originalUserInfoQuantized = JSON.parse(originalUserInfoSerialized);

    var totalBalance = totalBalanceCalc(originalUserInfoQuantized);

    originalUserInfoQuantized.TotalBalance = totalBalance;
    var originalUserInfoSerialized = JSON.stringify(originalUserInfoQuantized);
    localStorage.setItem(keyForOriginalObject, originalUserInfoSerialized);

    currentUserInfoQuantized.TotalBalance=totalBalance;
    var currentUserInfoSerialized=JSON.stringify(currentUserInfoQuantized);
    localStorage.setItem("currentUserInfo",currentUserInfoSerialized);


    var amountInput = document.getElementById("amountInput").value;
    var alertArea = document.getElementById("alertArea");
    alertArea.innerHTML = amountInput+"has been added";
    window.location.replace("Dashboard.html");

}
var amountVerification= function(){
    var amountInput = document.getElementById("amountInput").value;
    if(amountInput<0){
        document.getElementById("alertArea").innerHTML="Please enter positive amount";
    }
    else{
        methodForSendMoney();
    }
}
window.onload = function () {
    var sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click", amountVerification);
}