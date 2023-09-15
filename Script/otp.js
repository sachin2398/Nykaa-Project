var obj =1222
//localStorage.setItem("carddetails", JSON.stringify(obj));
alert("Your OTP is 1222");

var  otp = document.querySelector("#OTP");
document.querySelector("form").addEventListener("submit", form);
function form(event){
    event.preventDefault();
    if (otp.value==obj) {
        localStorage.setItem("cart", JSON.stringify([]));
        window.location='done.html'
    } else {
        document.querySelector("#alertMsg")
        var ale="Please enter corrrect OTP"
        showtost(ale)
    }
}
document.querySelector("#page").addEventListener("click" , function () {
    window.location = "index.html"});


    var tostBox = document.getElementById("tostBox");
    function showtost(cre){
      var tost = document.createElement("div");
      tost.classList.add("tost");
      tost.innerHTML = "<i class='bx bxs-x-circle'></i>" +cre;
      tostBox.appendChild(tost);
      setTimeout(()=>{
        tost.remove();
      },1500);
    
    }

//function changeOTP(newOTP) {
//    var otpElement = document.getElementById("otpGen");
//    otpElement.textContent = "Do not share OTP with others. Current OTP is " + newOTP;
//}
//changeOTP(obj);