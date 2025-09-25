
/*
**JavaScript has 8 data types :**

1) String - inside "", '', ``
2) Number - Positive, Negative, decimal
3) Bigint - big digit
4) Boolean - true | false
5) Undefined - variable create but not in any use
6) Null - empty variable 
7) Symbol - 
8) Object - real word objects

*/


// String = variable declared in '' or "" called string
const str1 = 'This is single quota.';
const str2 = "This is Double quota.";
console.log(str1);
console.log(str2);

// Numbers = variable declared with any digit we call that number data type.
// Numbers = 1) positive, 2) negative, 3) decimal number
const positive = 154;
const negative = -154;
const decimal = 154.7;
const hugeNumber = 5000;
console.log("positive : ", positive);
console.log("negative : ",negative);
console.log("decimal : ", decimal);
console.log("hugeNumber : ", hugeNumber);


// Bigint = all JS numbers are stored in 64-bit floating-point format.
// JS bigint is a new datatype (ES2020) that can be used to store integer values that are too big be represented by a normal JS numbers.
let x = BigInt("123456789012345678901234567890");
console.log("BigInt | x : ",x);


// Boolean - true | false
let num1 = 5;
let num2 = 5;
let num3 = 10;
console.log("num1 == num2 : ", num1 == num2);
console.log("num2 == num3 : ", num2 == num3);

// Undefined = Variable without a value has the value `undefined`, The type is also `undefined`.

let name;
console.log("name is", name);

// Null* = Null is a speacial value that represent an empty or unknown values.

let name1 = null;
console.log(name);

/*
Symbol = The JS ES6 introducted a new primitive data type called `symbol`.
          Symbols are immutable(Connot change) and are unique.
*/

const value1 = Symbol('hello');
const value2 = Symbol('hello');
console.log("value1 === value2 : ", value1 === value2);

/*
Object* = Js Objects are written with curly {} braces.
object properties are written as name:values pairs, separated by commas.
*/

const person = {firstName:'John', lastName: 'Doe', age: 50, eyeColor: 'blue'};
console.log(person);