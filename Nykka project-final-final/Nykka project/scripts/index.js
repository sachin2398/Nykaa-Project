import {navbar} from "../components/navbar.js"

let nav = document.getElementById("navbar")
nav.innerHTML = navbar()

import {FOOTER} from "../components/pagefooter.js"
let footer = document.getElementById("footer")
footer.innerHTML=FOOTER()
let left_message = document.getElementById("left-message")
let flag = true

setInterval(() => {

    if(flag == true){
        left_message.style.opacity = "0"
        flag = false
    }else {
        left_message.style.opacity = "1"
        flag = true
    }
},1500)

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slideIndex > slides.length-1) 
  {
      slideIndex = 0;

}
slideIndex++;
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
}
setInterval(showSlides, 2000);
let cart_product=JSON.parse(localStorage.getItem("cart_data"))||[];
    document.getElementById('cart_quantity').innerText=cart_product.length;
