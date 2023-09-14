
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
      alert('Please fill in all required fields.');
    }else{
      // if form filled storing data to local storage

      details.push(formObj)
      localStorage.setItem("add-details",JSON.stringify(details))

      form.reset() 
    
      // Mode of Payment
      if(formObj.payment === 'High'){
        window.location.href = 'payment.html'
      }else{
        alert("Your Order Has Been Placed")
      }
    }
    
})