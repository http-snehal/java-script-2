let cart_value = 0;

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const cart_summary = document.getElementById("cart-summary");


btn1.onclick = function() {
    cart_value = cart_value + 1;
    cart_summary.innerText = `Cart: ${cart_value} items`;
}

btn2.onclick = function (){
  cart_value -= 1;
  cart_summary.innerText = `Cart : ${cart_value} items`;
}

btn3.onclick = function () {
  cart_value += 2 ;
  cart_summary.innerText = `Cart : ${cart_value} items`;
}

btn4.onclick = function() {
  cart_value = 0 ;
  cart_summary.innerText = `Cart : ${cart_value} items`;
}