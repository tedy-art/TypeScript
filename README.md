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

# Basics OF JavaScript 
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