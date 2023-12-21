var signBtn=document.querySelector(".tick-icon1").addEventListener("click",function(){
  window.location="signin.html"
})



var details = JSON.parse(localStorage.getItem("add-details")) || []

var form = document.querySelector("form")
form.addEventListener("submit",function formSub(event){
    event.preventDefault()

    var formObj={
        name: event.target.name.value,
        mobile: event.target.mobile.value,
        email: event.target.email.value,
        address1: event.target.address1.value,
        address2: event.target.address2.value,
        payment:event.target.priority.value
    }

    // Form filled or not
    if (formObj.name === '' || formObj.mobile === '' || formObj.email === '' || formObj.address1 === '' || formObj.address2 === '' || formObj.payment === '') {
      var ale="Please fill in all required fields."
      showtost(ale)
    }else{
      // if form filled storing data to local storage

      details.push(formObj)
      localStorage.setItem("add-details",JSON.stringify(details))

      form.reset() 
    
      // Mode of Payment
      if(formObj.payment === 'High'){
        window.location.href = 'payment.html'
      }else{
        window.location.href = 'orderPlaced.html'
      }
    }
    
})


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