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
### What is JavaScript??
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