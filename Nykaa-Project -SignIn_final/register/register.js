var form=document.querySelector("form").addEventListener("submit",formSubmit);
   
function formSubmit(event){
  event.preventDefault();
  var target=event.target;

  var name=target.querySelector("#name").value;
  var email=target.querySelector("#email").value;
  var password=target.querySelector("#password").value;

  var arr=JSON.parse(localStorage.getItem("account-data"))?JSON.parse(localStorage.getItem("account-data")):[];

  if (!name || !email || !password) {
    //alert("Please fill in all fields.");
    var cre = "Please fill in all fields.";
    showtost(cre)
    return
}

  var emailExists = arr.some(function (item) {
});

if (emailExists) {
    alert("Email already exists in registered. Please use a different email.");
    var cre = "Email already exists in registered. Please use a different email.";
    showtost(cre)
    return;
}
  
 
   arr.push({
    name,
    email,
    password
  })

  localStorage.setItem("account-data",JSON.stringify(arr));
  openpop();

  target.querySelector("#name").value = "";
  target.querySelector("#email").value = "";
  target.querySelector("#password").value = "";
  // window.location.href="./signin.html";
  // console.log(obj);
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
var popup = document.querySelector(".popup");
function openpop(){ 
  popup.classList.add("popup-open");
}

document.querySelector(".popup button").addEventListener("click", function(){
  window.location.href="/signUp/index.html";
})
