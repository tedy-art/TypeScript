/*
In this example, we are returning a function from another function - 
We can return a function because functions in JavaScript are treated as values
*/ 

function createGreeter(greeting) {
  // This is the HOF, it takes a 'greeting' argument
  // and returns a new function.
  return function(name) {
    // This is the inner function that gets returned.
    // It "remembers" the 'greeting' from its closure.
    return `${greeting}, ${name}!`;
  };
}

// Usage:
const greetWithHello = createGreeter("Hello"); // greetWithHello is now a function
const greetWithHi = createGreeter("Hi");     // greetWithHi is also a function

console.log(greetWithHello("Alice")); // Output: Hello, Alice!
console.log(greetWithHi("Bob"));      // Output: Hi, Bob!