// Arithmetic Operator
//[+, -, *, /, %, **, ++, --]

const x = 5;
const y = 10;

// Addition
const sum = x + y;
console.log(sum);

// Subtraction
const sub = x - y;
console.log(sub);

// Multiplication
const multi = x * y;
console.log(multi);

// division
const divide = x / y;
console.log(divide);

// modulus
const module1 = x % y;
console.log(module1);

// Exponentiation
const expo = 5 ** 2;
console.log(expo)

// Increment
let Increment_new = 5;
let Increment = ++Increment_new;
console.log(Increment);

// Decrement(--)
let Decrement = --Increment_new;
console.log(Decrement);

// Concatenation
const load = "Tejas" + 7
console.log(load);

// string operation with divide
let str_div = "Tejas54212" / 5;
console.log(str_div); // O/P : NaN = Not a Number

//Increment with `x++`:
let inn_value = 10;
// One way:
inn_value = inn_value + 1;
console.log(inn_value);
// Second way:
inn_value++;
console.log(inn_value);
console.log(inn_value);
console.log(inn_value);

console.log(inn_value++);
console.log(inn_value++);
console.log(inn_value++);

// Increment with `++x`:
let value_pluse = 10;
++value_pluse;
console.log(++value_pluse);
console.log(value_pluse);
console.log(value_pluse);
console.log(value_pluse);
console.log(value_pluse);

console.log(++value_pluse);
console.log(++value_pluse);
console.log(++value_pluse);

//Decrement with `x--`:
let Decrement_value = 10;
// One way:
inn_value = Decrement_value + 1;
console.log(Decrement_value);
// Second way:
inn_value++;
console.log(Decrement_value);
console.log(Decrement_value);
console.log(Decrement_value);

console.log(Decrement_value--);
console.log(Decrement_value--);
console.log(Decrement_value--);

// Decrement with `--x`:
let value_minus = 10;
--value_minus;
console.log(--value_minus);
console.log(value_minus);
console.log(value_minus);
console.log(value_minus);
console.log(value_minus);

console.log(--value_minus);
console.log(--value_minus);
console.log(--value_minus);

// Ways to coerce a value to a number
// Means forcefully Change other data types in a number

//Way 1: using `+` sign:
const str = "5";
let number = +"5";
console.log(typeof(number));
console.log(number); //5

// we can't do this
let number2 = +"5abc";
console.log(number2); //O/p: Not a Number/ NaN

// JS have some method which are used to coerce other types
//Way 2: parseInt() function/method
let number3 = "5ysc";
let change_to_number = parseInt(number3);
console.log(number3); //'5ysc'
console.log(change_to_number); //5

//if number is decimal we still get integer
let number4 = "555.21";
let decimal_to_number = parseInt(number4);
console.log(number4); //555.21
console.log(decimal_to_number); //555


// coerce to decimal
let number5 = "555.21";
let string_to_decimal = parseFloat(number5);
console.log(number5); //'555.21'
console.log(string_to_decimal); //5
