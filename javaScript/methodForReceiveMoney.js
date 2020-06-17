var totalBalanceCalc = function (originalUserInfoQuantized) {

    var amountInput = Number(document.getElementById("amountInput").value);
    var totalBalance = amountInput + Number(originalUserInfoQuantized.TotalBalance);

    return totalBalance;

}

var methodForReceiveMoney = function () {


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
        methodForReceiveMoney();
    }
}
window.onload = function () {

    var receiveButton = document.getElementById("receiveButton");
    receiveButton.addEventListener("click", amountVerification);
}