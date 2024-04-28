// Synchronous vs Asynchronous

var num1 = 15;
var num2 = 20;

//Asynchronous
setTimeout(function () {
    console.log('SetTimeout Async', num1)
}, 1000)





// synchronous
// It means everything runs in order in one thread from top to bottom line by line
function say() {
    var total = 0;
    for (let num = 0; num < 10; num++) {
        total += num
    }
    console.log("Happy Tuesday from synchronous function", total)
}

sayHi();

console.log("Line 19", num1, num2)
console.log("Line 21", num1 + num2);
