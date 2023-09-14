document.addEventListener('DOMContentLoaded', function () {
    // reach back
    document.getElementById("back-button").addEventListener("click", function() {
     // Go back to the previous page in the browser's history
     window.location.href = "index.html"
   });
   
 
 
     const openSidebarButton = document.querySelector('.tap');
     const sidebar = document.querySelector('.cart-content');
     // const cartElements = document.querySelector('.cart-elements'); // Select the cart-elements div
     let isCartOpen = false;
 
     openSidebarButton.addEventListener('click', function (event) {
         event.preventDefault()
         event.stopPropagation();
         isCartOpen = true;
         if (isCartOpen) {
             sidebar.classList.add('tap');
             openSidebarButton.classList.add('hide-text');
             // cartElements.style.display = 'block';
         } else {
             sidebar.classList.remove('tap');
             openSidebarButton.classList.remove('hide-text');
             // cartElements.style.display = 'none';
         }
     });
 
     document.addEventListener('click', function (event) {
         event.preventDefault()
         if (isCartOpen && event.target !== openSidebarButton && !sidebar.contains(event.target)) {
             sidebar.classList.remove('tap');
             openSidebarButton.classList.remove('hide-text');
             isCartOpen = false;
         }
     });
     // to put inside pink page
     document.querySelector('.tap').addEventListener('click', function () {
         document.querySelector('.cart-content').classList.toggle('opened');
     });
 
 // for reward point
 
 const circle = document.querySelector('.circle');
 
 // Initial state (unticked)
 let isTicked = false;
 
 circle.addEventListener('click', () => {
     isTicked = !isTicked; // Toggle the state
     if (isTicked) {
         circle.classList.add('ticked'); // Add ticked class
     } else {
         circle.classList.remove('ticked'); // Remove ticked class
     }
 });
 
 let product = [
     {
         image_url:
         "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/f/0f5bedf6902395780755_1.jpg",
       name: "Maybelline New York Sensational Creamy Matte Marron Lipstick",
       quantity: "4g",
       Shade : "Divine Wine",
       price: 945,
       strikedoffprice: 2099,
     },
     {
         image_url:
         "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/5/05e6130773602345830_01.jpg",
       name: "MAC Prep + Fine Fix+",
       quantity: "100ml",
       Shade : "Rose",
       price: 2149,
       strikedoffprice: 2099,
     },
 ]
 
 // redirecting to coupon page
 document.getElementById("coupon").addEventListener("click", function() {
     // Specify the URL of the new page you want to navigate to
     window.location.href = "../couponPage/index.html"; // Replace with your desired URL
   });
   document.getElementById("crewdiv").addEventListener("click", function() {
     // Specify the URL of the new page you want to navigate to
     window.location.href = "../couponPage/index.html"; // Replace with your desired URL
   });
   
   document.getElementById("spantag").addEventListener("click", function() {
     // Specify the URL of the new page you want to navigate to
     window.location.href = "../couponPage/index.html"; // Replace with your desired URL
   });
   document.querySelector(".insidecoupon").addEventListener("click", function() {
     // Specify the URL of the new page you want to navigate to
     window.location.href = "new-../couponPage/index.html"; // Replace with your desired URL
   });
 
 });
 
 
 
 