
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
        
    }

    details.push(formObj)
    localStorage.setItem("add-details",JSON.stringify(details))

    form.reset()
    
    var selectElement = document.getElementById("priority")

    selectElement.addEventListener('change', function() {
        if (selectElement.value === 'High') {
          window.location.href = 'payment.html';
        }else{
            alert("Order Placed")
        }
      })

})