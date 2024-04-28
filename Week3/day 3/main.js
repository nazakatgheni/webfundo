var arr = [1,2,3,4,5];

// console.log(arr[1])

// console.log(arr.length)
// console.log(arr[arr.length-1])

// arr.push(6)
// console.log(arr)

// arr.pop()
// console.log(arr)

for(var i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// write a function that takes in an array of numbers 
// and squares each number in the array
// return the array with the squared numbers

function squareNum(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

var sqArr = [2,3,4,5,6]

console.log(squareNum(sqArr))