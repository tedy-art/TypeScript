# Java Script

### JavaScript Syllabus:

| Module                   | Topics                                                          |
|--------------------------|-----------------------------------------------------------------|
| **Module 1: Basics**      | Introduction to JavaScript, variables, data types, operators   |
| **Module 2: Control Flow**| Conditional statements, loops, switch statements                |
| **Module 3: Functions**   | Declaring functions, function expressions, arrow functions      |
| **Module 4: Objects**     | Objects, arrays, array methods, object-oriented programming    |
| **Module 5: Scope**       | Lexical scope, var, let, const, closures                        |
| **Module 6: ES6+ Features**| Template literals, arrow functions, destructuring, classes      |
| **Module 7: Asynchronous JavaScript** | Callbacks, Promises, async/await                            |
| **Module 8: DOM Manipulation** | Selecting elements, modifying content, handling events        |

# **Module 1: Basics**

# What is JavaScript??
- Java script is the world's most popular programming language.
- Java Script is the programming language for web.
- JS is easy to learn.

### Why study JavaScript ??
JavaScript one of the 3 language all web developer <i>must</i> learn : 
1) HTML - To define the content of the web pages.
2) CSS - to specify the layout of web pages.
3) JavaScript - to program the behavour of web pages.

### The ``<script>`` tag : 
In HTML, javascript code is inserted between ```<script>``` and ```</script>``` tags : 
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <title>JavaScript in HTML Body</title>
</head>
<body>
    <h2>Java Script in HTML body</h2>

    <p id="demo"></p>
    <script>
        document.getElementById("demo").innerHTML = "Hello, World!";
    </script>
</body>
</html>
```

Output:

    JavaScript in Body
    My First JavaScript

### Javascript Functions and Events
a JavaScript function is a block of javascript code, that can be executed when it "Called" for.

### JavaScript in ``<head>`` or ``<body>``:
Script can be placed in the ``<body>``, or in the ```<head>``` section of an HTML page.

### JavaScript in ``<head>``
In this example, a JavaScript function is placed in the ``<head>`` section of an HTML page.

The function is invoked (called) when a button is clicked:
```HTML
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>
    <h2>Demo JavaScript in Head</h2>

    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>

</body>
</html>
```

### JavaScript in ``<body>``
In this example, a JavaScript function is placed in the ``<body>``section of an HTML page.

The function is invoked (called) when a button is clicked:

Example
```HTML
<!DOCTYPE html>
<html>
<body>

    <h2>Demo JavaScript in Body</h2>

    <p id="demo">A Paragraph</p>

    <button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>
```

### External JavaScript:
Script can be placed in external files: 

save file as a ```myScript.js```:
```JS
function myFunction(){
    document.getElementById('demo').innerHTMl = "Paragraph Changed!"
}
```

To use an external script, put the name of the script file in the src(source) attribute of  a ```<script>``` tag:

Ex.
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Demo JS</title>
</head>
<body>
    <p id="demo">A paragraph.</p>
    <button type="button" onclick="myFunction()">Try it!</button>
    <script src="myScript.js"></script>
</body>
</html>
```

### JavaScript Display Possibilites : 
JavaScript can "display" data in different ways:

- Writing into an HTML element, using ```innerHTML```.
- Writing into the HTML output using ```document.write()```.
- Writing into alert box, using `windows.alert()`.
- Writing into browser console, using `console.log()`.


### Using `innerHTML`:

To access an HTML elements, JS can use the `document.getElementById(id)` method.

Ex
```HTML
<!DOCTYPE html>
<html>
    <body>
        <h1>My first web page</h1>
        <p>My first paragraph</p>

        <p id="demo"></p>
        <script>
            document.getElementById('demo').innerHTML = 5 + 6;
        </script>
    </body>
</html>
```

output:

<h1>My first web pages</h1>

<p>My first paragraph</p>

11

### Using `document.write()`:

Ex
```HTML
<!DOCTYPE html>
<html>
    <body>
        <h1>My first web pages</h1>
        <p>My first paragraph</p>

        <script>
            document.write(5 + 6);
        </script>
    </body>
</html>
```
Output:

<h1>My first web pages</h1>

<p>My first paragraph</p>

11

### Using `window.alert()`:
Ex
```HTML
<!DOCTYPE html>
<html>
    <head>
        <body>
            <h1>My first web pages</h1>
            <p>My first paragraph</p>

            <script>
                window.alert(5 + 6)
                // you can skip window
            </script>
        </body>
    </head>
</html>
```

### Using `console.log()`:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <body>
            <h1>My first web pages</h1>
            <p>My first paragraph</p>

            <script>
                console.log(5 + 6);
            </script>
        </body>
    </head>
</html>
```

# JavaScript Variables:

#### variables are containers for Storing Data
JS variable can be declare in 4 ways:

-  Automatically
- Using `var`
- Using `let`
- Using `const`

### 1) Automatically :
Ex.
```HTML
<!DOCTYPE html>
<html>
<body>
    <p>In the example, x,y and z are undecleared.</p>
    <p>They are automatically declared when first used.</p>

    <p id="demo"></p>

    <script>
        x = 5;
        y = 6;
        z = x + y;
        document.getElementById('demo').innerHTML = "The value of z is :" + z;
    </script>
</body>
</html>
```
```
In the example, x,y and z are undecleared.

They are automatically declared when first used.

The value of z is :11
```

### 2) Using `var`:

```HTML
<html>
    <body>
        <h1>JavaScript Variables</h1>

        <p>In this example, x, y, and z are variables.</p>

        <p id="demo"></p>

        <script>
            var x = 5;
            var y = 6;
            var z = x + y;
            document.getElementById("demo").innerHTML =
            "The value of z is: " + z;
        </script>

    </body>
</html>
```
Output

<h1>JavaScript Variables</h1>
In this example, x, y, and z are variables.

The value of z is: 11


### 3) Using `let`:


```HTML
<!DOCTYPE html>
<html>
    <body>
        <h1>JavaScript Variables</h1>

        <p>In this example, x, y, and z are variables.</p>

        <p id="demo"></p>

        <script>
            let x = 5;
            let y = 6;
            let z = x + y;
            document.getElementById("demo").innerHTML = "The value of z is: " + z;
        </script>

    </body>
</html>
```

Output:

<h1>JavaScript Variables</h1>

In this example, x, y, and z are variables.

The value of z is: 11

### Using `const`:
```HTML
<!DOCTYPE html>
<html>
    <body>
        <h1>JavaScript Variables</h1>

        <p>In this example, x, y, and z are variables.</p>

        <p id="demo"></p>

        <script>
            const x = 5;
            const y = 6;
            const z = x + y;
            document.getElementById("demo").innerHTML =
            "The value of z is: " + z;
        </script>

    </body>
</html>
```
Output:

<h1>JavaScript Variables</h1>
In this example, x, y, and z are variables.

The value of z is: 11

| Note                       |
|-----------------------------|
|The var keyword was used in all JavaScript code from 1995 to 2015.|
|The let and const keywords were added to JavaScript in 2015.|
|The var keyword should only be used in code written for older browsers.|

### Mixed variable declaration :
```HTML
<!DOCTYPE html>
<html>
    <body>

        <h1>JavaScript Variables</h1>

        <p>In this example, price1, price2, and total are variables.</p>

        <p id="demo"></p>

        <script>
            const price1 = 5;
            const price2 = 6;
            let total = price1 + price2;
            document.getElementById("demo").innerHTML = "The total is: " + total;
        </script>

    </body>
</html>
```

Output:
<h1>JavaScript Variables</h1>
<p>In this example, price1, price2, and total are variables.</p>

The total is: 11


### JS `let` variables : 
- The `let` keyword was introduced in ES6.
- variable with declared with `let` have <b>Block Scope.</b>
- variable declared with `let` must be <b>Declared</b> before use.
- variable declared with `let` connot be <b>Redeclared</b> in the same scope

**Block Scope**

- Before ES6 (2015), JavaScript did not have Block Scope.

- JavaScript had Global Scope and Function Scope.

- ES6 introduced the two new JavaScript keywords: `let` and `const`.

These two keywords provideed Block Scope in JavaScript

#### Ex. variable declared inside a { } block be accessed from outside the block : 
```JS
{
    let x = 2;
}
// x can NOT be used here
```

### Global Scope
- variable declared with the `var` always have <b>Global Scope</b>.
- variable declared with the `var` kayword can NOT have block scope.

```JS
{
    var x = 2;
}
// x can be used here
```

### Cannot be Reclared
- variable defined with `let` can not redeclared.
- You can not accidentally redeclare a variable declared with let.

`let` :
```JS
let x = "John Doe";

let x = 0;
```

`var` :
```JS
var x = "John Doe";

var x = 0;
```

### Redeclared Variables
|Note : Redeclaring a variable using the `var` keyword can impose problems.|
|--------------------------------------------------------------------------|

- Redeclaring a variable inside a block will also redeclare the variable outside the block

```HTML
<!DOCTYPE html>
<html>
<body>

<h2>Redeclaring a Variable Using var</h2>

<p id="demo"></p>

<script>
    var  x = 10;
    // Here x is 10

    {  
        var x = 2;
        // Here x is 2
    }

    // Here x is 2
    document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

```
Output
<h2>Redeclaring a Variable Using var</h2>
2

|Note : Redeclaring a variable using the `let` keyword can solve this problem.|
|-----------------------------------------------------------------------------|

- Redeclaring a variable inside a block will not redeclare the variable outside the block

```HTML
<!DOCTYPE html>
<html>
<body>

<h2>Redeclaring a Variable Using let</h2>

<p id="demo"></p>

<script>
    let  x = 10;
    // Here x is 10

    {  
        let x = 2;
        // Here x is 2
    }

    // Here x is 10
    document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
```
Output
<h2>Redeclaring a Variable Using let</h2>
10

## Difference Between var, let and const

|type  | Scope |	Redeclare |	Reassign |	Hoisted |	Binds this|
|------|-------|--------------|----------|----------|-------------|
|var   |	No |	Yes       |	Yes      |	Yes     |	Yes       |
|let   |Yes	   |No            |	Yes      |	No      |	No        |
|const |Yes	   |No            |	No       |	No      |	No        |


## const :

can do
- Variables defined with const have Block Scope.

cannot do
- Variables defined with const cannot be Redeclared.

- Variables defined with const cannot be Reassigned.


#### `const` cannot be reassigned : 
```HTML
<!DOCTYPE html>
<html>
    <body>
        <h2>Const variable :</h2>
        <p id="demo"></p>

        <script>
            try{
                const PI = 3.141592653589793;
                PI = 3.14;
            }
            catch(err){
                document.getElementById("demo").innerHTML = err;
            }
        </script>
    </body>
</html>
```
Output
<h2>Const variable :</h2>

<p>TypeError: invalid assignment to const 'PI'</p>

<br><br>

#### Constant Objects and Arrays
The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

- Reassign a constant value
- Reassign a constant array
- Reassign a constant object

But you CAN:

- Change the elements of constant array
- Change the properties of constant object

#### Constant Array
we can change the elements of a constent array :

```HTML
<!DOCTYPE html>
<html>
<body>

    <h2>JavaScript const</h2>

    <p>Declaring a constant array does NOT make the elements unchangeable:</p>

    <p id="demo"></p>

    <script>
        // Create an Array:
        const cars = ["Saab", "Volvo", "BMW"];

        // Change an element:
        cars[0] = "Toyota";

        // Add an element:
        cars.push("Audi");

        // Display the Array:
        document.getElementById("demo").innerHTML = cars; 
    </script>

</body>
</html>
```
Output:

<h2>JavaScript const</h2>
<p>Declaring a constant array does NOT make the elements unchangeable:</p>

<p>Toyota,Volvo,BMW,Audi</p>

# Data Types
JS has 8 datatypes:
1) String
2) Number
3) Bigint
4) Boolean
5) Undefined
6) Null
7) Symbol
8) Object

The Object Datatype:
the object data type contain:
1) An object
2) An Array
3) A date

|Example of data types|
|---------------------|
|// Numbers:</br>let length = 16;</br>let weight = 7.5;</br>|
|// Strings:</br>let color = "Yellow";</br>let lastName = "Johnson";</br>|
|// Booleans</br>let x = true;</br>let y = false;|
|// Object:</br>const person = {firstName:"John", lastName:"Doe"};|
|// Array object:</br>const cars = ["Saab", "Volvo", "BMW"];|
|// Date object:</br>const date = new Date("2022-03-25");|

### The Concept of Data Types
- In programming, data types is an important concept.

- To be able to operate on variables, it is important to know something about the type.

|Note : When adding a number and a string, JavaScript will treat the number as a string.|
|-|
```HTML
<!DOCTYPE html>
<html>
<body>

    <h2>JavaScript</h2>

    <p>When adding a number and a string, JavaScript will treat the number as a string.</p>

    <p id="demo"></p>

    <script>
        let x = 16 + "Volvo"; // 16Volvo
        // let x = "Volvo" + 16; O/P : Volvo16
        // let x = 16 + 4 + "Volvo"; o/p: 20Volvo
        // let x = "Volvo" + 16 + 4; o/p: Volvo164
        document.getElementById("demo").innerHTML = x;
    </script>

</body>
</html>
```
Output

<h2>JavaScript</h2>
<p>When adding a number and a string, JavaScript will treat the number as a string.</p>

<p>16Volvo</p>


### JavaScript Types are Dynamic
- JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

```HTML
<!DOCTYPE html>
<html>
<body>

    <h2>JavaScript Data Types</h2>

    <p>JavaScript has dynamic types. This means that the same variable can be used to hold different data types:</p>

    <p id="demo"></p>

    <script>
        let x;         // Now x is undefined
        x = 5;         // Now x is a Number
        x = "John";    // Now x is a String

        document.getElementById("demo").innerHTML = x;
    </script>

</body>
</html>
```

### Strings
- A string (or a text string) is a series of characters like "John Doe".

- Strings are written with quotes. 

You can use single or double quotes:
```HTML
<!DOCTYPE html>
<html>
<body>

    <h2>JavaScript Strings</h2>

    <p>Strings are written with quotes. You can use single or double quotes:</p>

    <p id="demo"></p>

    <script>
        let carName1 = "Volvo XC60"; # Double quotes
        let carName2 = 'Volvo XC60'; # Single quotes

        document.getElementById("demo").innerHTML = carName1 + "<br>" + carName2; 
    </script>

</body>
</html>
```
Output:
<h2>JavaScript Strings</h2>
Strings are written with quotes. You can use single or double quotes:
</br>
Volvo XC60</br>
Volvo XC60</br>

### Numbers
- All JS numbers are stored as decimal numbers(floating point).
- Numbers can be written with, or without decimals:

```HTML
<!DOCTYPE html>
<html>
<body>

    <h2>JavaScript Numbers</h2>

    <p>Numbers can be written with, or without decimals:</p>

    <p id="demo"></p>

    <script>
        let x1 = 34.00;
        let x2 = 34;
        let x3 = 3.14;

        document.getElementById("demo").innerHTML = x1 + "<br>" + x2 + "<br>" + x3;
    </script>

</body>
</html>
```
Output:
<h2>JavaScript Numbers</h2>
Numbers can be written with, or without decimals:

34</br>
34</br>
3.14</br>

### Exponential Notation
- Extra large or extra small numbers can be written with scientic (exponential) notation : 

```HTML
<!DOCTYPE html>
<html>
<body>

    <h2>JavaScript Numbers</h2>

    <p>Extra large or extra small numbers can be written with scientific (exponential) notation:</p>

    <p id="demo"></p>

    <script>
        let y = 123e5;
        let z = 123e-5;

        document.getElementById("demo").innerHTML = y + "<br>" + z;
    </script>

</body>
</html>
```
Output
<h1>JavaScript Numbers</h1>
Extra large or extra small numbers can be written with scientific (exponential) notation:
</br></br>
12300000</br>
0.00123</br>

### BigInt
- All JS numbers are stored in a 64-bit floating-point format.
- JS Bigint introduce in ES2020.
- store too big number or too small number

```HTML
<!DOCTYPE html>
<html>
<body>
    <h1>JavScript Bigint</h1>
    <p>A BigInt can not have decimals.</p>

    <p id="demo"></p>

    <p>You cannot perform math between a BigInt type and a Number type.</p>

    <script>
        let x = BigInt("123456789012345678901234567890");
        document.getElementById("demo").innerHTML = x; 
    </script>

</body>
</html>
```
Output:
<h1>JavScript Bigint</h1>
A BigInt can not have decimals.</br>
</br>
123456789012345678901234567890
</br></br>
You cannot perform math between a BigInt type and a Number type.

### Booleans
- Booleans can only have two values: true or false.

```HTML
<!DOCTYPE html>
<html>
<body>

    <h2>JavaScript Booleans</h2>

    <p>Booleans can have two values: true or false:</p>

    <p id="demo"></p>

    <script>
        let x = 5;
        let y = 5;
        let z = 6;

        document.getElementById("demo").innerHTML = (x == y) + "<br>" + (x == z);
    </script>

</body>
</html>
```
Output:
<h2>JavaScript Booleans</h2><br>
Booleans can have two values: true or false:
</br>
true</br>
false</br>

### Arrays
- JavaScript arrays are written with square brackets.

- Array items are separated by commas.

- The following code declares (creates) an array called `cars`.

containing three items (car names):
```HTML
<!DOCTYPE html>
<html>
<body>

    <h2>JavaScript Arrays</h2>

    <p>Array indexes are zero-based, which means the first item is [0].</p>

    <p id="demo"></p>

    <script>
        const cars = ["Saab","Volvo","BMW"];

        document.getElementById("demo").innerHTML = cars[0];
    </script>

</body>
</html>
```
Output:
<h2>JavaScript Arrays</h2>
Array indexes are zero-based, which means the first item is [0].
</br></br>
Saab

### Objects:
- JavaScript objects are written with curly braces {}.

- Object properties are written as name:value pairs, separated by commas.

```HTML
<!DOCTYPE html>
<html>
<body>

    <h2>JavaScript Objects</h2>

    <p id="demo"></p>

    <script>
        const person = {
            firstName : "John",
            lastName  : "Doe",
            age     : 50,
            eyeColor  : "blue"
        };

        document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " years old.";
    </script>

</body>
</html>
```
Output:
<h2>JavaScript Objects</h2>
John is 50 years old.


</br></br>
# JavaScript Operators

#### Types of JavaScript Operators
- There are different types of JavaScript operators:

1) Arithmetic Operators
2) Assignment Operators
3) Comparison Operators
4) String Operators
5) Logical Operators
6) Bitwise Operators
7) Ternary Operators
8) Type Operators

## 1) Arithmetic Operators
| Sr |Operator |	Description|
|-|-|-|
| 1 | + | Addition |
| 2 | -	| Subtraction|
| 3 | *	| Multiplication|
| 4 | **| Exponentiation (ES2016)|
| 5 | /	| Division|
| 6 | %	| Modulus (Division Remainder)|
| 7 |++	| Increment|
| 8 | --| Decrement|

- JavaScript supports various arithmetic operations, allowing you to perform calculations on numeric values.
- Here are the basic arithmetic operators in JavaScript:

1. **Addition (`+`):**
   - Adds two values together.

   ```javascript
   let sum = 5 + 3; // Result: 8
   ```

2. **Subtraction (`-`):**
   - Subtracts the right operand from the left operand.

   ```javascript
   let difference = 10 - 4; // Result: 6
   ```

3. **Multiplication (`*`):**
   - Multiplies two values.

   ```javascript
   let product = 2 * 6; // Result: 12
   ```

4. **Division (`/`):**
   - Divides the left operand by the right operand.

   ```javascript
   let quotient = 8 / 2; // Result: 4
   ```

5. **Remainder (`%`):**
   - Returns the remainder of the division of the left operand by the right operand.

   ```javascript
   let remainder = 10 % 3; // Result: 1
   ```

6. **Exponentiation (`**`):**
   - Raises the left operand to the power of the right operand.

   ```javascript
   let power = 2 ** 3; // Result: 8
   ```

7. **Increment (`++`):**
   - Increases the value of a variable by 1.

   ```javascript
   let counter = 5;
   counter++; // Equivalent to counter = counter + 1;
   // Now, counter is 6
   ```

8. **Decrement (`--`):**
   - Decreases the value of a variable by 1.

   ```javascript
   let countDown = 10;
   countDown--; // Equivalent to countDown = countDown - 1;
   // Now, countDown is 9
   ```


## 2) Assignment Operators
- Assignment operators assign values to JavaScript variables.

|Operator |	Example |	Same As   |
|---------|---------|-------------|
| =	      |x = y    |	x = y     |
|+=	      |x += y   |	x = x + y |
|-=	      |x -= y   |    x = x - y|
|*=	      |x *= y   |	x = x * y |
|/=	      |x /= y   |	x = x / y |
|%=	      |x %= y   |	x = x % y |
|**=      |	x **= y |	x = x ** y|

1. **Assignment (`=`):**
   - Assigns the value on the right to the variable on the left.

   ```javascript
   let x = 10; // x is assigned the value 10
   ```

2. **Addition Assignment (`+=`):**
   - Adds the value on the right to the current value of the variable on the left.

   ```javascript
   let y = 5;
   y += 3; // Equivalent to y = y + 3
   // Now, y is 8
   ```

3. **Subtraction Assignment (`-=`):**
   - Subtracts the value on the right from the current value of the variable on the left.

   ```javascript
   let z = 10;
   z -= 4; // Equivalent to z = z - 4
   // Now, z is 6
   ```

4. **Multiplication Assignment (`*=`):**
   - Multiplies the current value of the variable on the left by the value on the right.

   ```javascript
   let a = 2;
   a *= 3; // Equivalent to a = a * 3
   // Now, a is 6
   ```

5. **Division Assignment (`/=`):**
   - Divides the current value of the variable on the left by the value on the right.

   ```javascript
   let b = 20;
   b /= 4; // Equivalent to b = b / 4
   // Now, b is 5
   ```

6. **Remainder Assignment (`%=`):**
   - Assigns the remainder of the division of the current value of the variable on the left by the value on the right.

   ```javascript
   let c = 13;
   c %= 5; // Equivalent to c = c % 5
   // Now, c is 3
   ```

7. **Exponentiation Assignment (`**=`):**
   - Raises the current value of the variable on the left to the power of the value on the right.

   ```javascript
   let d = 2;
   d **= 3; // Equivalent to d = d ** 3
   // Now, d is 8
   ```

# 3) Comparison Operators:

| Operator  |	Description                    |
|-----------|----------------------------------|
| ==	    | equal to                         |
| ===	    | equal value and equal type       |
| !=	    | not equal                        |
| !==	    | not equal value or not equal type|
| >	        | greater than                     |
| <	        |less than                         |
| >=        |	greater than or equal to       |
| <=        |	less than or equal to          |
| ?	        |ternary operator                  |

- Comparison operators in JavaScript are used to compare two values and return a Boolean result (either `true` or `false`). 
- These operators are commonly used in conditional statements and expressions. 

Here are the basic comparison operators:

1. **Equal (`==`):**
   - Checks if two values are equal, performing type coercion if the operands are of different types.

   ```javascript
   let a = 5;
   let b = "5";
   console.log(a == b); // true (value equality is checked, type coercion is performed)
   ```

2. **Not Equal (`!=`):**
   - Checks if two values are not equal, performing type coercion if the operands are of different types.

   ```javascript
   let a = 5;
   let b = "5";
   console.log(a != b); // false (value equality is checked, type coercion is performed)
   ```

3. **Strict Equal (`===`):**
   - Checks if two values are equal without performing type coercion. Both value and type must be the same.

   ```javascript
   let a = 5;
   let b = "5";
   console.log(a === b); // false (value and type are different)
   ```

4. **Strict Not Equal (`!==`):**
   - Checks if two values are not equal without performing type coercion. Both value and type must be different.

   ```javascript
   let a = 5;
   let b = "5";
   console.log(a !== b); // true (value and/or type are different)
   ```

5. **Greater Than (`>`):**
   - Checks if the left operand is greater than the right operand.

   ```javascript
   let x = 10;
   let y = 5;
   console.log(x > y); // true
   ```

6. **Less Than (`<`):**
   - Checks if the left operand is less than the right operand.

   ```javascript
   let x = 10;
   let y = 15;
   console.log(x < y); // true
   ```

7. **Greater Than or Equal To (`>=`):**
   - Checks if the left operand is greater than or equal to the right operand.

   ```javascript
   let p = 10;
   let q = 10;
   console.log(p >= q); // true
   ```

8. **Less Than or Equal To (`<=`):**
   - Checks if the left operand is less than or equal to the right operand.

   ```javascript
   let p = 10;
   let q = 15;
   console.log(p <= q); // true
   ```

# 4) String Comparison
All the comparison operators above can also be used on strings:

Ex
```HTML
<!DOCTYPE html>
<html>
<body>

    <h1>JavaScript String Operators</h1>

    <p>All conditional operators can be used on both numbers and strings.</p>

    <p id="demo"></p>

    <script>
        let text1 = "A";
        let text2 = "B";
        let result = text1 < text2;
        document.getElementById("demo").innerHTML = "Is A less than B? " + result; 
        // Note that strings are compared alphabetically
    </script>

</body>
</html>
```
Output

<h1>JavaScript String Operators</h1>

All conditional operators can be used on both numbers and strings.

Is A less than B? true

# 4) Logical Operators

| Operator |	Description  |
|----------|-----------------|
|   &&     |	logical and  |
|   &#124;&#124; |logical or   |
|   !	   | logical not     |

- Logical operators in programming are used to perform logical operations on boolean values.
- These operators help in combining or manipulating boolean values to make decisions in a program.
- In JavaScript, there are three main logical operators:
 1) AND (`&&`), 
 2) OR (`||`), 
 3) NOT (`!`).

1. **Logical AND (`&&`):**
   - The `&&` operator returns `true` if both operands are `true`. Otherwise, it returns `false`.

   ```javascript
   let x = true;
   let y = false;
   console.log(x && y); // Output: false
   ```

2. **Logical OR (`||`):**
   - The `||` operator returns `true` if at least one of the operands is `true`. It returns `false` if both operands are `false`.

   ```javascript
   let a = true;
   let b = false;
   console.log(a || b); // Output: true
   ```

3. **Logical NOT (`!`):**
   - The `!` operator negates the boolean value of its operand. If the operand is `true`, it returns `false`, and vice versa.

   ```javascript
   let p = true;
   console.log(!p); // Output: false
   ```

**Examples with Expressions:**
```javascript
let age = 25;
let isStudent = false;

// Using AND (&&)
if (age > 18 && !isStudent) {
  console.log("You are an adult and not a student.");
} else {
  console.log("You may be under 18 or a student.");
}

// Using OR (||)
if (age < 13 || age >= 65) {
  console.log("You get a special discount.");
} else {
  console.log("You don't qualify for a special discount.");
}
```

- In the above examples, logical operators are used to create conditions based on boolean values.
- They are commonly used in decision-making structures like `if` statements, loops, and more, to control the flow of a program based on certain conditions.

# 5) Type Operators
| Operator   |	Description |
|-|-|
| typeof     |	Returns the type of a variable |
| instanceof | 	Returns true if an object is an instance of an object type |

In JavaScript, the `typeof` operator is commonly used to determine the type of a value or variable. It returns a string representing the data type of the operand. Here's how you can use the `typeof` operator:

```javascript
let num = 42;
let str = "Hello, World!";
let bool = true;
let arr = [1, 2, 3];
let obj = { key: "value" };
let func = function() { };

console.log(typeof num);  // Output: "number"
console.log(typeof str);  // Output: "string"
console.log(typeof bool); // Output: "boolean"
console.log(typeof arr);  // Output: "object"
console.log(typeof obj);  // Output: "object"
console.log(typeof func); // Output: "function"
```

Some important points about the `typeof` operator:

- It returns a string indicating the type of the operand.
- The types returned include `number`, `string`, `boolean`, `object`, `function` and `undefined`.
- It's important to note that the type of an array is considered "object." If you need to specifically check for an array, you might use other methods like `Array.isArray()`.

In addition to `typeof`, JavaScript also has the `instanceof` operator, which is used to check whether an object is an instance of a particular class or constructor. This is often used for checking whether an object is an instance of a specific type or class. Here's an example:

```javascript
class Animal { }
let cat = new Animal();

console.log(cat instanceof Animal); // Output: true
console.log(cat instanceof Object); // Output: true (all objects are instances of Object)
```

In this example, `cat instanceof Animal` returns `true` because `cat` is an instance of the `Animal` class.

# 6) Bitwise Operators
Bit operators work on 32 bits numbers.
Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

|Operator |	Description           |	Example |	Same as   |	Result |	Decimal|
|---------|-----------------------|---------|-------------|--------|-----------|
| &       |  AND                  | 5 & 1	| 0101 & 0001 |	0001   |  1        |
| &#124;  |	 OR	                  | 5 &#124; 1|0101 &#124; 0001 |0101|  5|
| ~	      |  NOT	              | ~ 5	    | ~0101	      |	1010   |  10       |
| ^	      |  XOR	              | 5 ^ 1   | 0101 ^ 0001 |	0100   |  4        |
| <<	  |  left shift	          | 5 << 1  | 0101 << 1	  | 1010   |  10       |
| >>	  |  right shift	      | 5 >> 1  | 0101 >> 1	  | 0010   |  2        |
| >>>	  |  unsigned right shift |	5 >>> 1 | 0101 >>> 1  |	0010   |  2        |

- Bitwise operators in JavaScript perform operations on the individual bits of integers.
- These operators treat their operands as a sequence of 32 bits (or 64 bits in the case of `BigInt`), rather than as decimal, hexadecimal, or octal numbers.

Here are the bitwise operators available in JavaScript:

1. **Bitwise AND (`&`):**
   - Performs a bitwise AND operation on each pair of corresponding bits. If both bits are 1, the result is 1; otherwise, it's 0.

   ```javascript
   let result = 5 & 3; // Binary: 0101 & 0011
   console.log(result); // Output: 1
   ```

2. **Bitwise OR (`|`):**
   - Performs a bitwise OR operation on each pair of corresponding bits. If at least one bit is 1, the result is 1; otherwise, it's 0.

   ```javascript
   let result = 5 | 3; // Binary: 0101 | 0011
   console.log(result); // Output: 7
   ```

3. **Bitwise XOR (`^`):**
   - Performs a bitwise XOR (exclusive OR) operation on each pair of corresponding bits. If the bits are different, the result is 1; otherwise, it's 0.

   ```javascript
   let result = 5 ^ 3; // Binary: 0101 ^ 0011
   console.log(result); // Output: 6
   ```

4. **Bitwise NOT (`~`):**
   - Inverts each bit of its operand. It changes 1 to 0 and 0 to 1.

   ```javascript
   let result = ~5; // Binary: ~0101
   console.log(result); // Output: -6
   ```

5. **Left Shift (`<<`):**
   - Shifts the bits of the left operand to the left by the number of positions specified by the right operand. The vacant positions are filled with zeros.

   ```javascript
   let result = 5 << 2; // Binary: 0101 << 2
   console.log(result); // Output: 20
   ```

6. **Sign-propagating Right Shift (`>>`):**
   - Shifts the bits of the left operand to the right by the number of positions specified by the right operand. The vacant positions are filled with the sign bit (0 for positive numbers, 1 for negative numbers).

   ```javascript
   let result = -5 >> 1; // Binary: -0101 >> 1
   console.log(result); // Output: -3
   ```

7. **Zero-fill Right Shift (`>>>`):**
   - Similar to the sign-propagating right shift, but the vacant positions are filled with zeros.

   ```javascript
   let result = -5 >>> 1; // Binary: -0101 >>> 1
   console.log(result); // Output: 2147483645
   ```

Bitwise operators are commonly used in scenarios where direct manipulation of bits is required, such as certain low-level operations or optimizations. They may not be as commonly used in everyday programming compared to other operators.

# **Module 2: Control Flow**
1) Conditional statements
2) loops
3) switch statements

## 1) Conitional Statement : 
Conditional statements in JavaScript are used to make decisions in your code. They allow you to execute different blocks of code based on whether a specified condition evaluates to true or false. 

1. `if` Statement
2. `else if` Statement
3. Ternary Operator (`? `)
4. Switch Statement

#### 1. `if` Statement:

The basic syntax of an `if` statement is as follows:

```javascript
if (condition) {
  // Code to be executed if the condition is true
} else {
  // Code to be executed if the condition is false
}
```

Example:

```javascript
let x = 10;

if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is not greater than 5");
}
```

#### 2. `else if` Statement:

You can use the `else if` statement to test additional conditions if the initial `if` condition is false:

```javascript
let grade = 75;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("Fail");
}
```

#### 3. Ternary Operator (`? `):

The ternary operator provides a concise way to write simple `if-else` statements in a single line:

```javascript
let result = (condition) ? "True" : "False";
```

Example:

```javascript
let age = 20;
let message = (age >= 18) ? "You are an adult" : "You are not an adult";
console.log(message);
```

#### 4. Switch Statement:

The `switch` statement is used for multiple branching. It's especially useful when you need to compare a single value against multiple possible values:

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  default:
    console.log("It's a regular day");
}
```

Conditional statements are fundamental for controlling the flow of your program based on certain conditions. They allow your code to make decisions dynamically, enabling you to create more flexible and responsive applications.

## 2) loops
In JavaScript, loops are used to repeatedly execute a block of code until a specified condition is met. There are several types of loops available, and each serves a different purpose. Here are the main types of loops in JavaScript:

1. `for` Loop
2. `while` Loop
3. `do...while` Loop
4. `for...in` Loop
5. `for...of` Loop

#### 1. `for` Loop:

The `for` loop is used when you know the number of iterations you want to perform.

```javascript
for (initialization; condition; iteration) {
  // Code to be repeated
}
```

Example:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

#### 2. `while` Loop:

The `while` loop is used when you don't know the number of iterations beforehand, and the loop continues as long as the specified condition is true.

```javascript
while (condition) {
  // Code to be repeated
}
```

Example:

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

#### 3. `do...while` Loop:

The `do...while` loop is similar to the `while` loop, but it always executes the block of code at least once before checking the condition.

```javascript
do {
  // Code to be repeated
} while (condition);
```

Example:
```javascript
let i = 0;

do {
  console.log("Current value of i: " + i);
  i++;
} while (i < 5);
```

Output:

```
Current value of i: 0
Current value of i: 1
Current value of i: 2
Current value of i: 3
Current value of i: 4
```

- In this example, 
    - the `do...while` loop executes the code block at least once, and then it checks the condition (`i < 5`). 
    - As long as the condition is true, the loop continues to execute, incrementing the value of `i` and printing its current value. 
    - The loop stops when the condition becomes false (`i` reaches 5).

#### 4. `for...in` Loop:

The `for...in` loop in JavaScript is used to iterate over the properties of an object.

```javascript
for (variable in object) {
  // Code to be repeated
}
```

Example:
```javascript
let person = {
  name: "John",
  age: 30,
  job: "developer"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
```
Output:
```
name: John
age: 30
job: developer
```

- In this example,
    - the `for...in` loop iterates over the properties of the `person` object. 
    - For each iteration, the variable `key` takes on the name of a property, and `person[key]` retrieves the value associated with that property. 
    - The loop then logs the property name and its corresponding value to the console.

#### 5. `for...of` Loop:

The `for...of` loop is used to iterate over iterable objects (arrays, strings, etc.).

```javascript
for (variable of iterable) {
  // Code to be repeated
}
```

Example:

```javascript
let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}
```

Output:

```
red
green
blue
```

- In this example, 
    - the `for...of` loop iterates over the elements of the `colors` array.
    - For each iteration, the variable `color` takes on the value of the current element, and the loop logs that value to the console.

You can also use `for...of` with other iterable objects, such as strings:

```javascript
let message = "Hello";

for (let char of message) {
  console.log(char);
}
```

Output:

```
H
e
l
l
o
```

- In this case,
    - the `for...of` loop iterates over the characters of the string and logs each character to the console.

## 3) switch statements
A `switch` statement in JavaScript provides a way to make decisions based on the value of an expression. It's a convenient alternative to a series of `if...else if...else` statements when you need to compare a single value against multiple possible values. 

Here's the basic syntax of a `switch` statement:

```javascript
switch (expression) {
  case value1:
    // Code to be executed if expression === value1
    break;
  case value2:
    // Code to be executed if expression === value2
    break;
  // additional cases as needed
  default:
    // Code to be executed if none of the cases match
}
```

Here's an example of a `switch` statement along with its output:

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  default:
    console.log("It's a regular day");
}
```

Output:

```
It's the start of the week
```

- In this example, 
    - the `switch` statement evaluates the value of the `day` variable. 
    - If the value matches any of the specified cases, the corresponding code block is executed. 
    - If none of the cases match, the `default` block is executed.

You can have as many cases as needed, and each case should end with a `break` statement to prevent fall-through (i.e., continuing to the next case). The `default` case is optional and is executed if none of the cases match.

Examples of switch statement:
Certainly! Here are a few more examples of `switch` statements:

### Example 1: Checking Day of the Week

```javascript
let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log("Today is " + dayName);
```
Output
```
Today is Tuesday
```

### Example 2: Grading System

```javascript
let score = 85;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log("Your grade is " + grade);
```
Output:
```
Your grade is B
```

### Example 3: Checking Type

```javascript
let value = "Hello";
let type;

switch (typeof value) {
  case "number":
    type = "Number";
    break;
  case "string":
    type = "String";
    break;
  case "boolean":
    type = "Boolean";
    break;
  default:
    type = "Other";
}

console.log("The type of value is " + type);
```
Output:
```
The type of value is String
```
