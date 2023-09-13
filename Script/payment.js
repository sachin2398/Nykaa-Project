var obj ={
    cardNumber:123456789,
    CVV: 222,
    date:'2024-01-01'
}
//localStorage.setItem("carddetails", JSON.stringify(obj));
var  cardNumber = document.querySelector("#Card");
var date = document.querySelector("#date");
var cvv= document.querySelector("#CVV");
document.querySelector("form").addEventListener("submit", form);
function form(event){
    event.preventDefault();
    if (cardNumber.value == obj.cardNumber && cvv.value == obj.CVV && date.value == obj.date) {
        window.location = "otp.html";
    } else {
        
        alert("Please fill in the card details correctly");
    }
}
//  