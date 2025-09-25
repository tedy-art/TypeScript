/*
Arithmetic Operator : 
+, -, *, **, /, %, ++, --
*/
let c = 10;
let d = 30;
console.log("Arithmetic Operator:")
console.log(c, "+", d,"=", c+d);
console.log(c, "-", d,"=", c-d);
console.log(c, "*", d,"=", c*d);
console.log(c, "**", d,"=", c**d);
console.log(c, "/", d,"=", c/d);
console.log("++", c,"=", ++c);
console.log("--", d,"=", --d);

/*
Assignment Operator
=, +=, -=, *=, /=, **=, %==
*/

let x = 10;
let y = 20;
console.log("Assignment Operator:")
console.log("=", x);
console.log("+=", x+=1);
console.log("-=", x-=1);
console.log("*=", x*=1);
console.log("/=", x/=1);
console.log("**=", x**=2);
console.log("%=", x%=2);

/*
Bitwise Operator:
&, |, ~, ^, <<, >>, >>>
*/

var a = 5;   // In binary: 0101
var b = 3;   // In binary: 0011

console.log("Bitwise Operator : ")
console.log("a =", a, "b =", b);

// ----------------------
// 1) Bitwise AND (&)
// ----------------------
// Compares each bit: result is 1 only if both bits are 1
// 0101 (5)
// 0011 (3)
// -----
// 0001 = 1
console.log("a & b =", a & b);   // Output: 1

// ----------------------
// 2) Bitwise OR (|)
// ----------------------
// Compares each bit: result is 1 if at least one bit is 1
// 0101 (5)
// 0011 (3)
// -----
// 0111 = 7
console.log("a | b =", a | b);   // Output: 7

// ----------------------
// 3) Bitwise XOR (^)
// ----------------------
// Compares each bit: result is 1 if bits are different
// 0101 (5)
// 0011 (3)
// -----
// 0110 = 6
console.log("a ^ b =", a ^ b);   // Output: 6

// ----------------------
// 4) Bitwise NOT (~)
// ----------------------
// Flips all bits: 0 → 1, 1 → 0
// For 5 (0101), the 32-bit representation is:
// 00000000 00000000 00000000 00000101
// Applying NOT (~):
// 11111111 11111111 11111111 11111010
// This is two’s complement → -6
console.log("~a =", ~a);         // Output: -6

// ----------------------
// 5) Left Shift (<<)
// ----------------------
// Shifts bits to the left, filling with 0
// Equivalent to multiplying by 2^n
// 0101 (5) << 1 = 1010 (10)
console.log("a << 1 =", a << 1); // Output: 10

// ----------------------
// 6) Signed Right Shift (>>)
// ----------------------
// Shifts bits to the right, keeping the sign bit
// 0101 (5) >> 1 = 0010 (2)
console.log("a >> 1 =", a >> 1); // Output: 2

// ----------------------
// 7) Unsigned Right Shift (>>>)
// ----------------------
// Shifts bits to the right, filling left side with 0
// Always produces a non-negative number
// 0101 (5) >>> 1 = 0010 (2)
console.log("a >>> 1 =", a >>> 1); // Output: 2

// ----------------------
// Extra: Negative numbers with shifts
// ----------------------
let neg = -5; 
// Binary (32-bit signed): 11111111 11111111 11111111 11111011

// Signed right shift >> keeps the sign bit (1), so result stays negative
console.log("neg >> 1 =", neg >> 1);   // Output: -3

// Unsigned right shift >>> ignores sign bit, fills with 0
// Produces a very large positive number
console.log("neg >>> 1 =", neg >>> 1); // Output: 2147483645

console.log("Comparison Operators : ")
var a = 10;
var b = 20;
console.log("a =", a, "b =", b);

// Equal to (==) → compares only values
console.log("a == b:", a == b);   // false

// Strict equal (===) → compares values AND types
console.log("a === b:", a === b); // false

// Not equal (!=) → true if values are different
console.log("a != b:", a != b);   // true

// Strict not equal (!==) → true if value OR type different
console.log("a !== b:", a !== b); // true

// Greater than (>)
console.log("a > b:", a > b);     // false

// Less than (<)
console.log("a < b:", a < b);     // true

// Greater or equal (>=)
console.log("a >= b:", a >= b);   // false

// Less or equal (<=)
console.log("a <= b:", a <= b);   // true

console.log("Logical Operator : ")
console.log("a =", a, "b =", b);

// -------------------
// 1) Logical AND (&&)
// -------------------
// true only if both conditions are true
console.log("a > 5 && b > 15:", a > 5 && b > 15);   // true (10 > 5 and 20 > 15)
console.log("a > 15 && b > 15:", a > 15 && b > 15); // false (10 > 15 is false)

// -------------------
// 2) Logical OR (||)
// -------------------
// true if at least one condition is true
console.log("a > 5 || b > 25:", a > 5 || b > 25);   // true (10 > 5 is true)
console.log("a > 15 || b > 25:", a > 15 || b > 25); // false (both false)

// -------------------
// 3) Logical NOT (!)
// -------------------
// inverts true → false, false → true
console.log("!(a > 5):", !(a > 5));   // false (a > 5 is true, inverted → false)
console.log("!(a > 15):", !(a > 15)); // true (a > 15 is false, inverted → true)

console.log("String Operator : ")
let firstName = "Tejas";
let lastName = "Falke";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: "Tejas Falke"

let age = 20;

console.log("ternary operator : ");
let result = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";

console.log(result);

// ===============================
console.log("typeof and instanceof : ");
// ===============================

// 🔹 typeof works on both primitives and objects
console.log("---- typeof Examples ----");
console.log(typeof 42);               // "number" → primitive number
console.log(typeof "Hello");          // "string" → primitive string
console.log(typeof true);             // "boolean" → primitive boolean
console.log(typeof undefined);        // "undefined"
console.log(typeof 123n);             // "bigint"
console.log(typeof Symbol("id"));     // "symbol"
console.log(typeof function(){});     // "function"
console.log(typeof [1,2,3]);          // "object" (⚠️ arrays also return "object")
console.log(typeof {name: "Tejas"});  // "object"

// 🔹 instanceof works only on objects
console.log("\n---- instanceof Examples ----");
let arr = [1, 2, 3];
console.log(arr instanceof Array);   // true → arr is created from Array
console.log(arr instanceof Object);  // true → Array is also an Object

let date = new Date();
console.log(date instanceof Date);   // true
console.log(date instanceof Object); // true

function MyClass() {}
let obj = new MyClass();
console.log(obj instanceof MyClass); // true → obj created from MyClass
console.log(obj instanceof Object);  // true

// ⚠️ Note: Primitives don’t work well with instanceof
console.log(42 instanceof Number);        // false → 42 is primitive
console.log(new Number(42) instanceof Number); // true → object wrapper
