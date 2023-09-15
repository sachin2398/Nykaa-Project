var form = document.querySelector("form");
form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  var target = event.target;

  var email = target.querySelector("#email").value;
  var password = target.querySelector("#password").value;

 var fill = "Plase fill all the fields"
  var storedValue = JSON.parse(localStorage.getItem("account-data"));
  if(email=="" || password==""){
      showtost(fill);
  }
  else{
  storedValue.forEach(function(item){
    count=0;
    for(var key in item){
      if(item[key]===email || item[key]===password){
        count++;
      }
    }
  });
  var head= document.querySelector("#heading");
  if(count===2){
   
   alert("Sign in sucessfull...... redirect to home page")
  }
  else{
    var cre = "Wrong Credentials";
    showtost(cre)
   
  }
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