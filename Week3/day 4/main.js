// # type conversion

const inputYear = "2000";
console.log(inputYear + 18);
console.log(typeof(Number(inputYear)))
console.log(Number(inputYear) + 18)

// # type coercion -- is when JS automatically converts types

console.log("I am " + 23 + " years old")

console.log("I am " + "23" + " years old")

console.log('13' - 13)
console.log('23' - '10' - 3)
console.log('23' * '2')
console.log('46' / '2')

console.log ('10' - '4' - '3' - 2 + '5')

let n = '1' + 1
n = n + 1
console.log(n)