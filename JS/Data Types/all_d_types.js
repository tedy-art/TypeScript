// String
let name = "Tejas";
let greeting = `Hello, ${name}!`; // template literal
console.log(greeting); // Hello, Tejas!

// Number
let age = 25;
let pi = 3.14;
let infinity = Infinity;
console.log(age, pi, infinity);

// Bool
let isStudent = true;
let hasJob = false;
console.log(isStudent && hasJob); // false

// Null
let car = null;
console.log(car); // null

// undefined
let city;
console.log(city); // undefined

// Symbol
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false (unique)

// Bigint
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber + 1n); // works with BigInt
