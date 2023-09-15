var signBtn=document.querySelector(".tick-icon1").addEventListener("click",function(){
    window.location="signin.html"
  })
  var addBtn=document.querySelector(".tick-icon2").addEventListener("click",function(){
    window.location="address.html"
  })

var obj ={
    cardNumber:123456789,
    CVV: 222,
    date:'2024-01-01'
}
//localStorage.setItem("carddetails", JSON.stringify(obj));
var  cardNumber = document.querySelector("#Card");
var date = document.querySelector("#date");
var cvv= document.querySelector("#CVV");
var cardName = document.querySelector('#priority');
document.querySelector("form").addEventListener("submit", form);
function form(event){
    event.preventDefault();

    var p = document.querySelector("#alertMsg")
    if (cardNumber.value == obj.cardNumber && cvv.value == obj.CVV && date.value == obj.date && cardName.value!="") {
        
        window.location = "otp.html";
    } else {
        var ale="Please fill in the card details correctly"
        showtost(ale)
    }
}


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