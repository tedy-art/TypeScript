// before arrow function

let myFunction = function(a, b) {return a * b}

console.log("before arrow function : ");
console.log(`multiplication of a and b is ${myFunction(2, 4)}`);

console.log("With arrow function : ");
let myFunction1 = (a,b) => a * b;
console.log(`multiplication of a and b is ${myFunction1(2, 4)}`);