var form = document.querySelector("form");
form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  var target = event.target;

  var email = target.querySelector("#email").value;
  var password = target.querySelector("#password").value;

  var storedValue = JSON.parse(localStorage.getItem("account-data"));

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
   alert("Wrong Credentials");
  }
}