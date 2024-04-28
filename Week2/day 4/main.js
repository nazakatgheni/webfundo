console.log("Running")

var blueShoes = document.querySelector('.blue-shoes-img')

console.log(typeof(blueShoes)); //object key and value
console.log(blueShoes.src); //images

var images = ['images/blue-shoes.jpg', 'images/nikes.jpg', 'images/shoes.jpg']
console.log(images.length)

var idx = 1;

setInterval(function(){

    if(idx == images.length){
        idx=0;
    }

    blueShoes.src = images(0);
    idx++; // ++ means 1+1, increment by 1

}, 3000);

function counter() {
    for (var num = 0; num <= 5; num++) {
    console.log(num);
    }
    }
    counter(); // run the function
    counter(); // run the function again

    function createArray(num) {
        var newArray = [];
        for (var i = 0; i <= num; i++) {
        newArray.push(i);
        }
        }
        createArray(5);
        //The newArray only exists inside of the function. Out here it no longer exists!