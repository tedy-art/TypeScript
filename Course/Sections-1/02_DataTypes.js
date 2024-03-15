
/*
**JavaScript has 8 data types :**

1) String
2) Number - Positive, Negative, decimal
3) Bigint
4) Boolean - true | false
5) Undefined
6) Null
7) Symbol
8) Object

*/


// String = variable declared in '' or "" called string
const str1 = 'This is single quota.';
const str2 = "This is Double quota.";
str1;
str2;

// Numbers = variable declared with any digit we call that number data type.
// Numbers = 1) positive, 2) negative, 3) decimal number
const positive = 154;
const negative = -154;
const decimal = 154.7;
positive;
negative;
decimal;


// Bigint = all JS numbers are stored in 64-bi floating-point format.
// JS bigint is a new datatype (ES2020) that can be used to store integer values that are too big be represented by a normal JS numbers.
let x = BigInt("123456789012345678901234567890");
x;


// Boolean - true | false
let num1 = 5;
let num2 = 5;
let num3 = 10;
console.log(num1 == num2);
console.log(num2 == num3);


