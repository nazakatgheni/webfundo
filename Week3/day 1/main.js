console.log("running");
var form = document.querySelector("form");
console.log(form)
var inputValue = document.querySelector("input");
console.log(inputValue.value);
var cart = document.querySelector("span");
console.log("cart");
console.log(typeof(cart.innerText))   
console.log(cart.innerText)

var cartAmount = parseInt(cart.innerText);
console.log(typeof(cartAmount)) // number
console.log(cartAmount)

form.addEventListener("submit", function(){
    // console.log(inputValue.value);
    alert(inputValue.value);
});

// var cart = document.querySelector("span");
// console.log("cart");
// console.log(typeof(cart.innerText))



// setTimeout(function(){
//     alert("Use this discount code to get 25% off");
// }, 10000);

function increaseCart(){
    // var cartAmount = parseInt(car.innerText);
    // // console.log(typeof(cartAmount))
    // cart.innerText = cartAmount +=1;

    cart.innerText++;
    // ++ means +1
}




console.log("Running");
var form = document.querySelector("form");
console.log(form)
var inputValue = document.querySelector("input");
console.log(inputValue.value);
var cart = document.querySelector("span");
console.log(cart)
console.log(typeof(cart.innerText)) //string
console.log(cart.innerText)

var cartAmount = parseInt(cart.innerText);
console.log(typeof(cartAmount)) // number
console.log(cartAmount)

form.addEventListener("submit", function(){
    // console.log(inputValue.value);
    alert(inputValue.value);
});

// setTimeout(function(){
//     alert("Use this discount code to get 25% off");
// },10000);


function increaseCart(){
    // var cartAmount = parseInt(cart.innerText);
    // console.log(typeof(cartAmount))
    // cart.innerText = cartAmount +=1;

    // cartAmount = cartAmount +1;
    // cart.innerText = cartAmount;

    cart.innerText++;
}