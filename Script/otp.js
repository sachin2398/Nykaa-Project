var obj =123
//localStorage.setItem("carddetails", JSON.stringify(obj));
var  otp = document.querySelector("#OTP");
document.querySelector("form").addEventListener("submit", form);
function form(event){
    event.preventDefault();
    if (otp.value==obj) {
        alert("Payment sucessfull");
        localStorage.setItem("cart", JSON.stringify([]));
    } else {
        
        alert("Please enter corrrect OTP");
    }
}
document.querySelector("#menspage").addEventListener("click" , function () {
    window.location = "index.html"});
//  