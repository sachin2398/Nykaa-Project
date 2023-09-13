
var paymentDetails= JSON.parse(localStorage.getItem("payment-details")) || []

var form = document.querySelector("form")
var paymentMode = document.getElementById("paymentMode")
var creditCardDetails = document.getElementById("creditCardDetails")
var payPalDetails = document.getElementById("payPalDetails")

paymentMode.addEventListener("change",function(){
    if(paymentMode.value === 'creditCard'){
        creditCardDetails.style.display='block'
    }else if(paymentMode.value === 'payPal'){
        payPalDetails.style.display === 'block'
    }
})

form.addEventListener("submit",function(event){
    event.preventDefault()
    
})