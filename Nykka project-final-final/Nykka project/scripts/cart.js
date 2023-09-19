

// import {FOOTER} from "../components/pagefooter.js"
// let footer = document.getElementById("footer")
// footer.innerHTML=FOOTER();



// let total=0;
    
//     let cart_arr=JSON.parse(localStorage.getItem("cart_data"));
//     console.log("cart_arr",cart_arr)
//     function appendToCart(cart_arr){
//         document.getElementById("cartcontainer").innerHTML=""
//         cart_arr.forEach(function(el,ind){
//             var cartdiv=document.createElement('div');
//             cartdiv.setAttribute("class","cartDiv");

//             var img=document.createElement('img');
//             img.setAttribute('src',el.image);
//             var imgdiv=document.createElement('div');
//             imgdiv.setAttribute("class","imgdiv");
//             imgdiv.append(img)

//             var h4=document.createElement('h4');
//             h4.setAttribute("id","h4");
//             h4.textContent=el.name;
            
//             var smalldiv=document.createElement('div');
//             smalldiv.setAttribute("id","smalldiv");

//             var price=document.createElement('p');
//             price.textContent="Rs: ₹"+el.price;
//             price.setAttribute("id","p1")

           
//             // increase and decrease quantity;
    
//             var incbtn = document.createElement("button");
//             var decbtn = document.createElement("button");
//             var qspan = document.createElement("span");
//             incbtn.innerText="+";
//             qspan.innerText= el.quantity;
//             decbtn.innerText="-";

//             incbtn.addEventListener("click", function(){
//                 incrementQ(el);
//               });
//                decbtn.addEventListener("click",function(){
//                 decrementq(el);
//                } );
               

//             var button=document.createElement('button')
//             button.setAttribute("id","button");
//             button.textContent="Remove";
//             button.addEventListener("click",function(){
//                 removeFun(ind)
//             })
//            let siz = document.createElement('div')
//            siz.setAttribute("id","siz")
//             smalldiv.append(h4,price,incbtn.decbtn,button);
//             siz.append(imgdiv,smalldiv)
//             cartdiv.append(siz);
//             document.getElementById("cartcontainer").append(cartdiv);
//             total+=+(el.price);
//             // details.innerHTML=""
       
//    document.getElementById('cart_quantity').innerText=cart_arr.length;
//         })
//         let rand =Math.floor(Math.random()*46);
//         var num = total-rand;

        
// document.getElementById("btot").innerHTML=`Bag Total:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ₹${total}`
//  document.getElementById("bdis").innerHTML=`<span style="color:darkgreen">Bag Discount:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp -${rand}</span>`;
//  document.getElementById("stot").innerHTML=`Sub Total:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ₹${num}`;
// document.getElementById('total').innerHTML=`<span style="color:#fc2779">Grand Total:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp₹${ num}</span>`;
//         total=0;  
//     }

//     appendToCart(cart_arr)

    
//       function removeFun(i){
//         cart_arr.splice(i,1);
//         localStorage.setItem("cart_data",JSON.stringify(cart_arr));
//         document.getElementById('cart_quantity').innerText=cart_arr.length;
//         appendToCart(cart_arr)



//     }

//     function incrementQ(item){
//         item.quantity+=1;
//         localStorage.setItem("cart",JSON.stringify(cart));
//         displaycart();
   
//         Noitem();
//       }
  
//       function decrementq(item){
//         if(item.quantity>1){
//           item.quantity-=1;
//           localStorage.setItem("cart",JSON.stringify(cart));
//         }
//         displaycart();
     
//         Noitem();
//       }

        
// my code 


import { FOOTER } from "../components/pagefooter.js";

let footer = document.getElementById("footer");
footer.innerHTML = FOOTER();

let total = 0;

let cart_arr = JSON.parse(localStorage.getItem("cart_data"));
console.log("cart_arr", cart_arr);

function appendToCart(cart_arr) {
  document.getElementById("cartcontainer").innerHTML = "";
  cart_arr.forEach(function (el, ind) {
    var cartdiv = document.createElement("div");
    cartdiv.setAttribute("class", "cartDiv");

    var img = document.createElement("img");
    img.setAttribute("src", el.image);
    var imgdiv = document.createElement("div");
    imgdiv.setAttribute("class", "imgdiv");
    imgdiv.append(img);

    var h4 = document.createElement("h4");
    h4.setAttribute("id", "h4");
    h4.textContent = el.name;

    var smalldiv = document.createElement("div");
    smalldiv.setAttribute("id", "smalldiv");

    var price = document.createElement("p");
    price.textContent = "Rs: ₹" + el.price;
    price.setAttribute("id", "p1");

    var qspan = document.createElement("span");
    qspan.innerText = el.quantity; // Display the initial quantity

    var incbtn = document.createElement("button");
    var decbtn = document.createElement("button");
    incbtn.setAttribute("class", "btn_quantity");
    decbtn.setAttribute("class", "btn_quantity");
    incbtn.innerText = "+";
    decbtn.innerText = "-";

    incbtn.addEventListener("click", function () {
      incrementQuantity(el, qspan);
    });

    decbtn.addEventListener("click", function () {
      decrementQuantity(el, qspan);
    });

    var button = document.createElement("button");
    button.setAttribute("id", "buttonRMV");
    button.textContent = "Remove";
    button.addEventListener("click", function () {
      removeFun(ind);
    });

    let siz = document.createElement("div");
    siz.setAttribute("id", "siz");
    smalldiv.append(h4, price, incbtn, qspan, decbtn, button); // Add qspan, incbtn, and decbtn to smalldiv
    siz.append(imgdiv, smalldiv);
    cartdiv.append(siz);
    document.getElementById("cartcontainer").append(cartdiv);
    total += +(el.price);
    document.getElementById("cart_quantity").innerText = cart_arr.length;
  });
  let rand = Math.floor(Math.random() * 46);
  var num = total - rand;

  document.getElementById("btot").innerHTML = `Bag Total:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ₹${total}`;
  document.getElementById("bdis").innerHTML = `<span style="color:darkgreen">Bag Discount:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp -${rand}</span>`;
  document.getElementById("stot").innerHTML = `Sub Total:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ₹${num}`;
  document.getElementById('total').innerHTML = `<span style="color:#fc2779">Grand Total:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ₹${num}</span>`;
  total = 0;
  updateCartTotals(0,0);
}

appendToCart(cart_arr);

function removeFun(i) {
  cart_arr.splice(i, 1);
  localStorage.setItem("cart_data", JSON.stringify(cart_arr));
  document.getElementById('cart_quantity').innerText = cart_arr.length;
  appendToCart(cart_arr);
}

function incrementQuantity(item, qspan) {
  item.quantity += 1;
  localStorage.setItem("cart_data", JSON.stringify(cart_arr));
  qspan.innerText = item.quantity; // Update the displayed quantity
  updateCartTotals(0,0);
}

function decrementQuantity(item, qspan) {
  if (item.quantity > 1) {
    item.quantity -= 1;
    localStorage.setItem("cart_data", JSON.stringify(cart_arr));
    qspan.innerText = item.quantity; // Update the displayed quantity
    updateCartTotals(0,0);
  }
}

function updateCartTotals(couponDiscount, rand) {
    let total = 0;
    
    cart_arr.forEach(function (item) {
      total += item.price * item.quantity;
    });
    console.log(total);
    let num = total - couponDiscount;
    
    
    document.getElementById("btot").innerHTML = `Bag Total:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ₹${total}`;
    document.getElementById("bdis").innerHTML = `<span style="color:darkgreen">Bag Discount:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp -${rand}%</span>`;
    document.getElementById("stot").innerHTML = `Sub Total:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ₹${num}`;
    document.getElementById('total').innerHTML = `<span style="color:#fc2779">Grand Total:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ₹${num}</span>`;
  }
  

  

  
//   coupon code
var copun = false;

document.querySelector("#cupon-active").addEventListener("click", function () {
  const couponValue = document.querySelector("#cupon-filled").value;
  var total = 0;
  cart_arr.forEach(function (item) {
    total += item.price * item.quantity;
  });
  if (couponValue === "nykaa30" && !copun) {
    // Apply the coupon discount (30% off)
    const couponDiscount = Math.floor(total * 0.3);
    console.log(couponDiscount);
    copun = true; // Set copun to true to prevent multiple coupon applications
    updateCartTotals(couponDiscount, 30)
  }
  else{
    var cre = "invalid Coupon";
    showtost(cre)
    return
  }
});
//popup funtion
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


