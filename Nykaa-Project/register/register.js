var form=document.querySelector("form").addEventListener("submit",formSubmit);
   
function formSubmit(event){
  event.preventDefault();
  var target=event.target;

  var name=target.querySelector("#name").value;
  var email=target.querySelector("#email").value;
  var password=target.querySelector("#password").value;

  var arr=JSON.parse(localStorage.getItem("account-data"))?JSON.parse(localStorage.getItem("account-data")):[];

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
}

  var emailExists = arr.some(function (item) {
    return item.email === email;
});

if (emailExists) {
    alert("Email already exists in registered. Please use a different email.");
    return;
}
  
 
   arr.push({
    name,
    email,
    password
  })

  localStorage.setItem("account-data",JSON.stringify(arr));

  target.querySelector("#name").value = "";
  target.querySelector("#email").value = "";
  target.querySelector("#password").value = "";
  // window.location.href="./signin.html";
  // console.log(obj);
}