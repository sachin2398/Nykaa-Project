
var details = JSON.parse(localStorage.getItem("add-details")) || []

var form = document.querySelector("form")
form.addEventListener("submit",function formSub(event){
    event.preventDefault()

    var formObj={
        pincode: event.target.pincode.value,
        address1: event.target.pincode.value,
        address2: event.target.pincode.value,
        name: event.target.name.value,
        phone: event.target.phone.value,
        email: event.target.email.value
    }

    details.push(formObj)
    localStorage.setItem("add-details",JSON.stringify(details))

    form.reset()
})