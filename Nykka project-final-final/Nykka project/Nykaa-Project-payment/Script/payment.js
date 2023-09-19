var signBtn=document.querySelector(".tick-icon1").addEventListener("click",function(){
  window.location="signin.html"
})
var addBtn=document.querySelector(".tick-icon2").addEventListener("click",function(){
  window.location="address.html"
})

var obj={
  cardNumber: 123456789,
  CVV: 222,
  date: '2024-01-01'
}


let tColorA = document.getElementById("tColorA"),
tColorB = document.getElementById("tColorB"),
tColorC = document.getElementById("tColorC"),
iconA = document.querySelector(".fa-credit-card"),
iconB = document.querySelector(".fa-building-columns"),
iconC = document.querySelector(".fa-wallet"),
cDetails = document.querySelector(".card-details")

function doFun(){
    tColorA.style.color = "rgb(211, 63, 88)"
    tColorB.style.color = "#444"
    tColorC.style.color = "#444"
    iconA.style.color = "rgb(211, 63, 88)"
    iconB.style.color = "#aaa"
    iconC.style.color = "#aaa"
    cDetails.style.display = "block"
}

function doFunA(){
    tColorA.style.color = "444"
    tColorB.style.color = "rgb(211, 63, 88)"
    tColorC.style.color = "#444"
    iconA.style.color = "aaa"
    iconB.style.color = "rgb(211, 63, 88)"
    iconC.style.color = "#aaa"
    cDetails.style.display = "none"
}

function doFunB(){
    tColorA.style.color = "444"
    tColorB.style.color = "#444"
    tColorC.style.color = "rgb(211, 63, 88)"
    iconA.style.color = "aaa"
    iconB.style.color = "#aaa"
    iconC.style.color = "rgb(211, 63, 88)"
    cDetails.style.display = "none"
}

var cNumber = document.getElementById("number")
var eDate = document.getElementById("e-date")
var cvv = document.getElementById("cvv")


var form = document.querySelector("form").addEventListener("submit", form);
function form(event){
    event.preventDefault();
    if (cNumber.value == obj.cardNumber && cvv.value == obj.CVV && eDate.value == obj.date) {
      window.location = "otp.html";
      form.reset()
    }else{
        var ale="Please fill correct details."
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